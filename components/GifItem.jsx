import React from 'react'
import Image from 'next/image'
import styles from '../styles/Gifs.module.scss'

const GifItem = ({title, url}) => {
  return (
    <>
      <div className={styles.card}>
        <Image
          src={url}
          width={600}
          height={300}
          alt={title}
        />
      </div>
    </>
  )
}

export default GifItem