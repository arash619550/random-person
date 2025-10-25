'use client'

import React, { useState } from "react"

export default function Test6() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert("Hello " + name)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <form className="flex flex-col space-y-4 p-6 border border-white rounded shadow-md bg-purple-100" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="border border-purple-300 p-2 rounded outline-0 placeholder-purple-400 bg-purple-200 text-gray-800"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="border border-purple-300 p-2 rounded outline-0 placeholder-purple-400 bg-purple-200 text-gray-800"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="border border-purple-300 p-2 rounded outline-0 placeholder-purple-400 bg-purple-200 text-gray-800"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
