"use client"
export default function ErroBoundary({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <p className="text-red-500 font-bold">
                {error.message}
            </p>
            <button onClick={reset} className="p-3 text-blue-500">Try Again</button>
        </div>
    )
}