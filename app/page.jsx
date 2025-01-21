import Link from 'next/link'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main>
      <div className="blog-cards">
        <div className="blog-card">
          <img src="https://via.placeholder.com/300x200" alt="Blog Image" />
          <div className="content">
            <h3>UX review presentations</h3>
            <p>How do you create compelling presentations that wow your colleagues?</p>
            <a href="#">Read post</a>
          </div>
        </div>
        <div className="blog-card">
          <img src="https://via.placeholder.com/300x200" alt="Blog Image" />
          <div className="content">
            <h3>Best books on scaling your startup</h3>
            <p>Discover the best books to help you scale your startup.</p>
            <a href="#">Read post</a>
          </div>
        </div>
        <div className="blog-card">
          <img src="https://via.placeholder.com/300x200" alt="Blog Image" />
          <div className="content">
            <h3>Building your API Stack</h3>
            <p>Explore the best practices for building RESTful APIs.</p>
            <a href="#">Read post</a>
          </div>
        </div>
      </div>

      <footer>
        <p>Ready to grow your business? Join over 4,000 startups already growing with Untitled.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>

        <div className="links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </footer>
    </main>
  )
}
