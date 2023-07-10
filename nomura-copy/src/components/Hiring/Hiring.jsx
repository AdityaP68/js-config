import React from 'react'
import Layout from '../Layout/Layout'
import styles from "./Hiring.module.scss"

function Hiring() {
  return (
    <Layout currentPage={"hiring"}>
        <div className={styles.contentWrapper}>
            hiring
        </div>
    </Layout>
  )
}

export default Hiring