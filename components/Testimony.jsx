import Image from 'next/image'
import styles from '../styles/Testimonials.module.scss'

const Testimony = ({image, name, rank, description}) => {
  const img = `/images/${image}.png`
  
  return (
    <div className={styles.testimonyContainer}>
      <Image
        className={styles.testimonyImage}
        src={img}
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <div className={styles.testimonyTextContainer}>
        <p className={styles.testimonyName}>{name}</p>
        <p className={styles.testimonyRank}>{rank}</p>
        <p className={styles.testimonyDescription}>&quot;{description}&quot;</p>
      </div>
    </div>
  )
}

export default Testimony