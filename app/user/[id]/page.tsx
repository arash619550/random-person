import React from 'react'

export default function page({ params }: { params: { id: string } }) {
    const { id } = params

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-100 p-6 rounded shadow">
                <p className="text-2xl font-semibold text-blue-600">
                    User ID: {id}
                </p>
            </div>
        </div>
    )
}
