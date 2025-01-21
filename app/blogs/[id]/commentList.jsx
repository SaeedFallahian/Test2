import Link from "next/link"

async function getComment() {
  const res = await fetch('http://localhost:5000/comments')
  return res.json()
}
export default async function CommentList() {
  const comment = await getComment()
  return (
    <>
      {comment.map((item) => (
        <Link href={`/blogs/${item.id}`}>
        <div key={item.id} className=" commentItem dataItem">
          <h3 className=" Esm font-bold text-lg ">{item.name}</h3>
          <p className="pform">{item.comment}</p>
          <h6>{item.date}</h6>
        </div>
</Link>
      ))}
    </>
  )
}
