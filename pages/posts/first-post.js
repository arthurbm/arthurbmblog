import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Firts Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <p>Captivated by the way you look, tonight the night is dancing in your eyeees, your sweet eyeees, yeeaah</p>
      </Layout>
    </>
  )
}