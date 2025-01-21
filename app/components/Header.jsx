import Link from "next/link"
export default function Header() {
  return (
    <div>
          <header>
        <div className="logo"></div>
        <nav>
            <Link href="/"> Home </Link>
            <a href="#">Products</a>
            <a href="#">Resources</a>
          <Link href="/blog">Pricing </Link>
        </nav>

    <div className="hero">
        <h1>Untitled Blog</h1>
        <p>New product features, the latest in technology, solutions, and updates.</p>
        <input type="email" placeholder="Enter your email"/>
        <button>Subscribe</button>
    </div>
       
    <div className="categories">
        <a href="#">View all</a>
        <a href="#">Design</a>
        <a href="/blogs">Blogs</a>
        <a href="/">Home</a>
        <Link href="/create">Create Blog</Link>
        <a href="#">Leadership</a>
        <a href="#">Management</a>
        <a href="#">Interviews</a>
    </div>
    </header>
    </div>
  )
}
