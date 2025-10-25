"use client"

import { useEffect, useState } from "react"

export default function Test() {
    const [time, setTime] = useState("")
    useEffect(() => {
        const timeFunction = () => {
            const now = new Date()
            setTime(now.toLocaleTimeString())
            const interval = setInterval(timeFunction, 1000)
            return () => clearInterval(interval)
        }
        timeFunction()
    }, [])
    return (
        <div>
            {time}
        </div>
    )
}
