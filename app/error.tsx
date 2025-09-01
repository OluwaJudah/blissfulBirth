"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      {/* Icon */}
      <div className="mb-4 rounded-full bg-red-100 p-4">
        <AlertTriangle className="h-10 w-10 text-red-600" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>

      {/* Description */}
      <p className="mt-2 text-gray-600">
        We encountered an unexpected error. Please try again.
      </p>

      {/* Error Digest (optional) */}
      {error?.digest && (
        <p className="mt-2 text-xs text-gray-400">Error ID: {error.digest}</p>
      )}

      {/* Retry button */}
      <button
        onClick={() => reset()}
        className="mt-6 rounded-full bg-black px-6 py-2 font-medium text-white shadow-md transition hover:bg-gray-800"
      >
        Try Again
      </button>
    </div>
  );
}
