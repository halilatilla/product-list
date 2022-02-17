import { NextPage } from 'next'
import Head from 'next/head'

import { Header, SubHeader } from '@src/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Product List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section>
        <Header />
        <main className="container">
          <SubHeader />
        </main>
      </section>
    </>
  )
}

export default Home
