'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CreateForm() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [date, setDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const newTicket = {
      title: title,
      body: body, 
      date: date,
    }

    const res = await fetch('http://localhost:4000/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTicket),
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/')
    } else {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6"
    >
      <h1 className="text-xl font-bold text-gray-800 text-center">Create a New Ticket</h1>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter the ticket title"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Description:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter the ticket description"
          rows={4}
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Date:</span>
        <input
          required
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <button
        type="submit"
        className={`w-full py-2 px-4 rounded-md text-white ${
          isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        disabled={isLoading}
      >
        {isLoading ? 'Adding...' : 'Add Ticket'}
      </button>
    </form>
  )
}
