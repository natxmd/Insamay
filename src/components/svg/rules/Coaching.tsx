interface Props {
  fill?: string
}

function Coaching({ fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      fill="none"
      viewBox="0 0 72 72"
    >
      <path
        fill={fill}
        d="M61.904 54.687c-4.968 6.679-11.435 10.948-19.535 12.644C24.97 70.972 7.753 59.367 4.54 41.866 1.433 24.938 12.016 8.746 28.868 4.85c8.017-1.854 15.677-.646 22.878 3.363.132.073.263.148.39.23.048.031.083.083.26.267-1.297 1.265-2.59 2.551-3.926 3.79-.124.114-.559-.01-.798-.128-5.25-2.587-10.765-3.304-16.508-2.307-10.189 1.768-18.757 10.042-20.956 20.2-2.766 12.78 3.993 25.475 16.128 30.294 15.44 6.133 32.842-3.67 35.604-20.06.95-5.63.2-11.019-2.338-16.14-.252-.51-.242-.822.191-1.238 1.192-1.143 2.324-2.347 3.5-3.548 5.967 9.372 6.789 23.785-1.39 35.115z"
      ></path>
      <path
        fill={fill}
        d="M19.962 52C7.715 39.385 13.239 18.836 30.117 14.166c5.723-1.583 11.265-.873 16.524 1.9.274.144.554.391.69.662.586 1.157 1.119 2.34 1.7 3.577l-1.578 1.491c-8.47-6.79-20.274-4.495-26.056 3.294-5.598 7.54-4.66 17.869 2.234 24.3 6.677 6.228 17.18 6.423 24.128.489 7.115-6.077 8.856-17.043 2.387-25.342l1.65-1.538c1.137.538 2.393 1.113 3.626 1.732.215.108.37.385.495.615 7.414 13.593-1.22 30.838-16.557 33.021-7.468 1.064-13.91-1.13-19.398-6.367z"
      ></path>
      <path
        fill={fill}
        d="M48.86 29.468c3.346 6.676 1.13 14.752-5.096 18.716-6.343 4.038-14.51 2.64-19.199-3.286-4.574-5.781-3.983-14.126 1.366-19.29 5.154-4.976 13.54-5.467 18.712-1.11l-3.215 3.063c-2.575-1.61-5.55-2.1-8.697-1.047-2.358.788-4.161 2.296-5.43 4.427-2.442 4.097-1.555 9.49 2.057 12.618 3.692 3.197 9.041 3.318 12.85.307 3.487-2.755 5.343-8.205 2.133-13.458l3.187-3.116c.41.66.858 1.386 1.331 2.176z"
      ></path>
      <path
        fill={fill}
        d="M33.097 41.611c-2.358-1.36-3.574-3.353-3.398-6.008.172-2.608 1.566-4.462 4.002-5.451 1.713-.696 3.416-.585 5.163.279l-4.248 4.109 2.757 2.75 4.028-4.246c1.375 2.116 1.019 5.131-.721 7.123-1.867 2.137-4.802 2.71-7.583 1.444zM59.577 11.828c.544.396 1.052.761 1.6 1.05.768.404 1.566.75 2.446 1.167-2.314 2.305-4.532 4.527-6.777 6.72-.153.15-.56.194-.77.104-1-.427-1.98-.901-2.946-1.397a1.654 1.654 0 01-.618-.607c-.247-.412-.423-.868-.629-1.305-1.005-2.142-1-2.137.63-3.776 1.77-1.778 3.53-3.566 5.39-5.446.587 1.215 1.12 2.32 1.674 3.49z"
      ></path>
    </svg>
  );
}

export default Coaching;