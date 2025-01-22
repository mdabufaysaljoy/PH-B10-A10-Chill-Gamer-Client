export const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center">
    <h1 className="text-9xl font-bold text-error">404</h1>
    <p className="text-2xl font-medium mt-4">Oops! Page not found</p>
    <p className="mt-2">
      The page you are looking for doesn’t exist or has been moved.
    </p>
    <a href="/" className="btn btn-primary mt-6">
      Go Back Home
    </a>
  </div>
);
