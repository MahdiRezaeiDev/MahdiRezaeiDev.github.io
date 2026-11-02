import { Component } from "react";

/** @extends {Component<{children: import('react').ReactNode}, {hasError: boolean}>} */
export default class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <main className="error-page section-shell" role="alert">
          <span className="brand-mark">mr.</span>
          <h1>Mahdi Rezaei</h1>
          <p>
            This page could not be displayed. You can still explore my projects
            on GitHub or get in touch by email.
          </p>
          <div>
            <a
              className="solid-button"
              href="https://github.com/MahdiRezaeiDev"
            >
              View GitHub profile
            </a>
            <a
              className="underlined-link"
              href="mailto:mahdi.sohaily4030@gmail.com"
            >
              Email Mahdi
            </a>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
