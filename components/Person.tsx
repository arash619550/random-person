"use client"

import { useEffect, useRef, useState } from "react"

type Person = {
  name: { first: string }
  picture: { large: string }
  email: string
  dob: { age: number }
  location: { street: { number: number; name: string } }
  cell: string
  login: { password: string }
}

export default function Test9() {
  const [person, setPerson] = useState<Person[]>([])
  const [name, setName] = useState('')
  const [nameDescription, setNameDescription] = useState('Hi, My name is')

  const value = useRef<HTMLHeadingElement | null>(null)
  const valueDescription = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/")
        const data = await res.json()
        setPerson(data.results)
        setName(data.results[0].name.first)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="h-[50vh] relative bg-gray-800">
        <h1 className="text-white text-center text-4xl pt-12">Random User Generator</h1>
        <div className="absolute bg-white w-1/2 h-80 left-1/2 -translate-x-1/2 top-full">
          {person.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-white  relative -top-16">
              <div className="bg-gray-100 w-full flex justify-center relative -translate-y-1/2 h-24">
                <img
                  src={item.picture.large}
                  alt="person"
                  className="rounded-full absolute top-1/4 outline-2 outline-white outline-offset-1"
                />
              </div>
              <div className="pt-6 text-center">
                <p className="text-gray-400 mb-3" ref={valueDescription}>
                  {nameDescription}
                </p>
                <h2 className="font-bold text-[24px]" ref={value}>
                  {name}
                </h2>
              </div>
              <div className="flex gap-8 mt-6">
                <img
                  src="/images/person-button-svgrepo-com.svg"
                  alt="person"
                  className="w-12 z-10 cursor-pointer"
                  onClick={() => {
                    if (value && value.current && valueDescription && valueDescription.current) {
                      value.current.innerText = item.name.first
                      valueDescription.current.innerText = "Hi, My name is"
                    }
                  }}
                />
                <img
                  src="/images/email-1572-svgrepo-com.svg"
                  alt="email"
                  className="w-12 z-10 cursor-pointer"
                  onClick={() => {
                    if (value && value.current && valueDescription && valueDescription.current) {
                      value.current.innerText = item.email
                      valueDescription.current.innerText = "My email address is"
                    }
                  }}
                />
                <img
                  src="/images/note-text-svgrepo-com.svg"
                  alt="age"
                  className="w-12 z-10 cursor-pointer"
                  onClick={() => {
                    if (value && value.current && valueDescription && valueDescription.current) {
                      value.current.innerText = String(item.dob.age)
                      valueDescription.current.innerText = "My age is"
                    }
                  }}
                />
                <img
                  src="/images/map-location-pin-svgrepo-com.svg"
                  alt="address"
                  className="w-12 z-10 cursor-pointer"
                  onClick={() => {
                    if (value && value.current && valueDescription && valueDescription.current) {
                      value.current.innerText =
                        item.location.street.number + " " + item.location.street.name
                      valueDescription.current.innerText = "My address is"
                    }
                  }}
                />
                <img
                  src="/images/phone-svgrepo-com.svg"
                  alt="phone"
                  className="w-12 z-10 cursor-pointer"
                  onClick={() => {
                    if (value && value.current && valueDescription && valueDescription.current) {
                      value.current.innerText = item.cell
                      valueDescription.current.innerText = "My phone number is"
                    }
                  }}
                />
                <img
                  src="/images/lock-alt-svgrepo-com.svg"
                  alt="password"
                  className="w-12 z-10 cursor-pointer"
                  onClick={() => {
                    if (value && value.current && valueDescription && valueDescription.current) {
                      value.current.innerText = item.login.password
                      valueDescription.current.innerText = "My password is"
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
