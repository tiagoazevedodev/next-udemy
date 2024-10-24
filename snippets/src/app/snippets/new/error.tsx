'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({error, reset}: ErrorPageProps) {
  return (
    <div>
      <h1 className="text-xl font-bold">Error</h1>
      <div className="bg-red-200 border-red-500 border p-2 rounded">
        {error.message}
      </div>
      <button onClick={reset} className="rounded p-2 bg-blue-200 font-semibold">
        Reset
      </button>
    </div>
  );

}