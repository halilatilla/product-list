import { useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { getAllProducts } from '@src/api'
import { useAppDispatch, setFilteredProducts } from '@src/store'
import { useLocalStorage } from '@src/hooks'
import { Header, SubHeader, SideBar, ProductList } from '@src/components'

import styles from '@src/styles/pages/Products.module.scss'

const Home: NextPage = () => {
  const [localProducts, setProductList] = useLocalStorage('products', [])

  const dispatch = useAppDispatch()

  const handleGetProducts = async () => {
    const products = await getAllProducts()
    setProductList(products)
  }

  useEffect(() => {
    handleGetProducts()
  }, [])

  useEffect(() => {
    dispatch(setFilteredProducts(localProducts))
  }, [localProducts])

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
            <SideBar products={localProducts} />
            <ProductList />
          </div>
        </main>
      </section>
    </>
  )
}

export default Home
