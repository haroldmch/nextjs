import Link from 'next/link'

export default function index() {
  return (
    <>
      <h2>Mini-Projects</h2>
      <ul>
        <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/counter">Counter</Link></li>
        <li><Link href="/gifs">Gifs</Link></li>
      </ul>
    </>
  )
}
