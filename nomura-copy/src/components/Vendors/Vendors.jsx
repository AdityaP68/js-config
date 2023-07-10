import React from 'react'
import Layout from '../Layout/Layout'
import styles from "./Vendors.module.scss"

function Vendors() {
  return (
    <Layout currentPage={"vendors"}>
        <div className={styles.contentWrapper}>vendors</div>
    </Layout>
  )
}

export default Vendors