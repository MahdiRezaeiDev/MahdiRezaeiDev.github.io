import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function showModal() {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function close() {
    this.removeAttribute("open");
    this.dispatchEvent(new Event("close"));
  };
});

test("the English portfolio renders offline with the approved public projects", () => {
  const originalFetch = global.fetch;
  global.fetch = jest.fn(() => Promise.reject(new Error("Offline")));
  try {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Complex workflows. Clear experiences.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Mahdi Rezaei", { selector: "strong" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(10);
    expect(
      screen
        .getAllByRole("article")
        .map((article) => within(article).getByRole("heading").textContent),
    ).toEqual([
      "Hazara Mom Stitches",
      "Ruby100",
      "NAA Trading",
      "Zarin",
      "Power House",
      "Clinic Management System",
      "Air Pollution Metrics",
      "SpaceX Explorer",
      "Math Magicians",
      "Awesome Books",
    ]);
    expect(
      screen.queryByText(/Selected user Not found/),
    ).not.toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
    expect(
      screen.getByRole("link", { name: /Download resume/ }),
    ).toHaveAttribute("href", "/Mahdi-Rezaei-Resume.pdf");
  } finally {
    global.fetch = originalFetch;
  }
});

test("project filters and case details expose the correct repository and verified demo", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: /Business systems/ }));
  expect(screen.getAllByRole("article")).toHaveLength(6);
  expect(
    screen.queryByRole("button", { name: "Air Pollution Metrics" }),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Frontend & APIs/ }));
  expect(screen.getAllByRole("article")).toHaveLength(4);
  fireEvent.click(
    screen.getByRole("button", { name: "Explore Air Pollution Metrics" }),
  );
  const dialog = screen.getByRole("dialog", { name: "Air Pollution Metrics" });
  expect(
    within(dialog).getByRole("link", { name: /View repository/ }),
  ).toHaveAttribute(
    "href",
    "https://github.com/MahdiRezaeiDev/air-pollution-metrics",
  );
  expect(
    within(dialog).getByRole("link", { name: /Live demo/ }),
  ).toHaveAttribute("href", "https://air-pollution-metrics.netlify.app/");
  fireEvent.click(
    within(dialog).getByRole("button", { name: "Close project details" }),
  );
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /All work/ }));
  expect(screen.getAllByRole("article")).toHaveLength(10);
});

test("independent projects use real screenshots and public website links", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Power House" }));
  const dialog = screen.getByRole("dialog", { name: "Power House" });
  expect(
    within(dialog).getByRole("link", { name: /View public sign-in page/ }),
  ).toHaveAttribute("href", "https://support.ydsp.ir/");
  expect(
    within(dialog).queryByRole("link", { name: /View repository/ }),
  ).not.toBeInTheDocument();
  expect(
    within(dialog).getByText(/Application access requires an account/),
  ).toBeInTheDocument();
  expect(within(dialog).getByRole("img")).toHaveAttribute(
    "src",
    "/projects/power-house.jpg",
  );
  fireEvent.click(
    within(dialog).getByRole("button", { name: "Close project details" }),
  );
  fireEvent.click(screen.getByRole("button", { name: "NAA Trading" }));
  expect(
    screen.getByText(/sample catalog data and simulated form submissions/),
  ).toBeInTheDocument();
});

test("mobile navigation supports opening, following a link and Escape focus recovery", () => {
  render(<App />);
  const toggle = screen.getByRole("button", { name: "Open navigation menu" });
  const navigation = screen.getByRole("navigation", {
    name: "Mobile navigation",
    hidden: true,
  });
  expect(navigation).not.toBeVisible();
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  expect(navigation).toBeVisible();
  fireEvent.click(within(navigation).getByRole("link", { name: /Work/ }));
  expect(navigation).not.toBeVisible();
  fireEvent.click(toggle);
  fireEvent.keyDown(navigation, { key: "Escape" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
});

test("copy email confirms success and provides a usable fallback on denied clipboard access", async () => {
  const writeText = jest
    .fn()
    .mockResolvedValueOnce(undefined)
    .mockRejectedValueOnce(new Error("Permission denied"));
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  });
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "COPY EMAIL" }));
  expect(await screen.findByText("Email address copied.")).toBeInTheDocument();
  expect(writeText).toHaveBeenCalledWith("mahdi.sohaily4030@gmail.com");
  fireEvent.click(screen.getByRole("button", { name: "COPY EMAIL" }));
  await waitFor(() =>
    expect(
      screen.getByText("Please copy the address shown above."),
    ).toBeInTheDocument(),
  );
  expect(
    screen.getByRole("link", { name: "mahdi.sohaily4030@gmail.com" }),
  ).toHaveAttribute("href", "mailto:mahdi.sohaily4030@gmail.com");
});

test("a rendering error preserves the owner identity and contact links", () => {
  const consoleError = jest
    .spyOn(console, "error")
    .mockImplementation(() => {});
  const BrokenContent = () => {
    throw new Error("Render failure");
  };
  try {
    render(
      <ErrorBoundary>
        <BrokenContent />
      </ErrorBoundary>,
    );
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "View GitHub profile" }),
    ).toHaveAttribute("href", "https://github.com/MahdiRezaeiDev");
    expect(screen.getByRole("link", { name: "Email Mahdi" })).toHaveAttribute(
      "href",
      "mailto:mahdi.sohaily4030@gmail.com",
    );
  } finally {
    consoleError.mockRestore();
  }
});
