import Link from "next/link"

async function getData() {
  const res = await fetch('http://localhost:4000/data')
  return res.json()
}
export default async function DataList() {
  const data = await getData()
  return (
    <>
      {data.map((item) => (
        <Link href={`/blogs/${item.id}`}>
        <div key={item.id} className="dataItem">
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="pform">{item.body}</p>
          <h6>{item.date}</h6>
        </div>
</Link>
      ))}
    </>
  )
}
