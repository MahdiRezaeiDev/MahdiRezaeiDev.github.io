import ErrorBoundary from "./components/ErrorBoundary";
import Portfolio from "./Portfolio";

export default function App() {
  return (
    <ErrorBoundary>
      <Portfolio />
    </ErrorBoundary>
  );
}
