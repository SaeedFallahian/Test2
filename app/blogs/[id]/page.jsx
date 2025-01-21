async function getData(id) {
  const res = await fetch('http://localhost:4000/data/' + id)
  return res.json()
}
import CommentForm from '@/app/components/comments'
import React from 'react'
import CommentList from './commentList'

export default async function BlogDetailsPage({ params }) {
  const blog = await getData(params.id)

  return (
    <div>
      {
        <div key={blog.id} className="dataItem">
          <h3 className="font-bold text-lg">{blog.title}</h3>
          <p className="pform">{blog.body}</p>
          <h6>{blog.date}</h6>
          <h1>Comments</h1>
        </div>
        
      }
      {
                  <CommentForm/>
      }
      {
        <h2 className='commentDetails'>
          Your Comments
        </h2>
      }
      {
        
        <CommentList/>
      }

    </div>
  )
}
