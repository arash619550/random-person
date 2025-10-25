"use client"

import { useEffect } from "react"

export default function Test8() {
  useEffect(() => {
    const getFunction = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: "سلام دنیا",
            body: "این یک پست تستی است",
            userId: 1,
          })
        })
        const data = await res.json()
        console.log(data);
      } catch (e) {
        console.log(e);

      }
    }
    getFunction()
  }, [])
  return (
    <div>Test8</div>
  )
}
