import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>First Steps in Next.js</title>
        <meta name="description" content="First Steps in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>

      <footer className="footer">
        <hr />
        haroldmch { new Date().getFullYear() }
      </footer>
    </>
  )
}

export default MyApp
