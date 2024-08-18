import type { AppProps } from "next/app";

import ErrorBoundary from './error'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
