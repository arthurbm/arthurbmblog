import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Um rapaz meio atrasado em horários</p>
        <p>
          Fiz isso em um tutorial do Next.js, se quiser fazer um parecido{' '}
          <a href="https://nextjs.org/learn">Clica aqui</a>
        </p>
      </section>
    </Layout>
  )
}