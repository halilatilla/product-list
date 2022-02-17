import { useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { Header, SubHeader, SideBar, ProductList } from '@src/components'
import { getAllProducts } from '@src/api'
import { useLocalStorage } from '@src/hooks'

import styles from '@src/styles/pages/Products.module.scss'

const Home: NextPage = () => {
  const [localProducts, setProductList] = useLocalStorage('products', [])

  const handleGetProducts = async () => {
    const products = await getAllProducts()
    setProductList(products)
  }

  useEffect(() => {
    handleGetProducts()
  }, [])

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
          <div className={styles.products}>
            <SideBar />
            {localProducts.length > 0 && <ProductList products={localProducts} />}
          </div>
        </main>
      </section>
    </>
  )
}

export default Home
