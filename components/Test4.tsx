'use client'

import React, { useRef } from "react"

export default function Test4() {
    const inputRef = useRef<HTMLInputElement | null>(null)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <form onSubmit={e => e.preventDefault()} className="flex flex-col space-y-2">
                <input
                    type="text"
                    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ref={inputRef}
                    placeholder="Type something..."
                />
                <button
                    type="submit"
                    onClick={() => inputRef.current?.focus()}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Focus
                </button>
            </form>
        </div>
    )
}
