import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonClick } from "../components/ButtonClick";
import click from '../public/images/click.gif'
import styles from '../styles/Counter.module.scss'
// import ButtonClick from '../components/ButtonClick'

export default function Counter(){

  const [numClicks, setNumClicks] = useState(0);

  const increase = () => {
    setNumClicks(numClicks + 1)
  }

  const reset = () => {
    setNumClicks(0)
  }

  return(
    <>
      <Head>
        <title>Counter</title>
      </Head>

      <h1>Counter</h1>
      <h4><Link href="/">Back</Link></h4>

      <div className={styles.counterGlobalContainer}>
        <h3>Click Counter</h3>
        <Image src={click} alt="click logo" className={styles.counterImage}/>
        <div className={styles.counterContainer}>
          <p className={styles.counterNumber}>{numClicks}</p>
        </div>

        <ButtonClick text="+1" className="ninguna xd" handler={increase}/>
        <ButtonClick text="Reset" className="ninguna xd" handler={reset}/>
      </div>
    </>
  )
}
