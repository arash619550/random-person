"use client"
import React, { useState } from 'react'

export default function Test3() {
    const [str, setStr] = useState<string>("")
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const reverse = str.toLowerCase().split('').reverse().join()
        reverse == str.toLowerCase().split('').join() && console.log('reversed')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setStr(e.target.value)} className='border' />
                <p>{str}</p>
                <button type='submit'>test</button>
            </form>
        </div>
    )
}
