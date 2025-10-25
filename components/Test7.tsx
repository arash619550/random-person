'use client'
import React, { useState } from 'react'

export default function Test7() {
    const [items, setItems] = useState<string[]>([])
    const [item, setItem] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (item.trim() === "") return
        setItems([...items, item])
        setItem('')
    }

    const handleDelete = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
                <input
                    type="text"
                    value={item}
                    onChange={e => setItem(e.target.value)}
                    className="border p-2 rounded flex-1"
                    placeholder="Add item"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    Add
                </button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center border p-2 rounded mb-2">
                        {item}
                        <button
                            onClick={() => handleDelete(index)}
                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Del
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
