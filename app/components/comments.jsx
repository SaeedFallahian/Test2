'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CommentForm() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]) // تاریخ امروز
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const newComment = {
      name: name,
      comment: comment,
      date: date,
    }

    const res = await fetch('http://localhost:5000/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/')
    } else {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <h1 className="comment-title">Leave a Comment</h1>

      <label className="comment-label">
        <span className="comment-label-text">Your Name:</span>
        <input
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="comment-input"
          placeholder="Enter your name"
        />
      </label>

      <label className="comment-label">
        <span className="comment-label-text">Your Comment:</span>
        <textarea
          required
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className="comment-textarea"
          placeholder="Write your comment here..."
          rows={5}
        />
      </label>

      <label className="comment-label">
        <span className="comment-label-text">Date:</span>
        <input
          type="text"
          value={date}
          readOnly
          className="comment-date"
        />
      </label>

      <button
        type="submit"
        className={`comment-submit ${isLoading ? 'disabled' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Post Comment'}
      </button>
    </form>
  )
}
