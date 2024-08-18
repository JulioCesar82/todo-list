'use client';
 
import { Component } from 'react';
 
class ErrorBoundary extends Component {
  constructor(props: any) {
    super(props)
 
    // Define a state variable to track whether is an error or not
    this.state = {
      hasError: false,
      error: { message: '', stack: '' },
      info: { componentStack: '' }
    };
  }

  static getDerivedStateFromError = (error: any) => {
    return { hasError: true };
  };

  componentDidCatch = (error: any, info: any) => {
    this.setState({ error, info });
  };

  // render() {
  //   // Check if the error is thrown
  //   if (this.state.hasError) {
  //     // You can render any custom fallback UI
  //     return (
  //       <div>
  //         <h2>Oops, there is an error!</h2>
  //         <button
  //           type="button"
  //           onClick={() => this.setState({ hasError: false })}
  //         >
  //           Try again?
  //         </button>
  //       </div>
  //     )
  //   }
 
  //   // Return children components in case of no error
 
  //   return this.props.children
  // }

  render() {
    const { hasError, error, info } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return fallback;
    }

    return children;
  }
}
 
export default ErrorBoundary