import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CategoryForm from "../components/CategoryForm";
import GifGrid from "../components/GifGrid";

export default function Gifs() {

  const [categories, setCategories] = useState(['Cyberpunk 2077'])

  const addCategory = (category) => {
    if(categories.includes(category)) return

    setCategories([category, ...categories])
  }

  const removeCategory = (category) => {
    const filtered = categories.filter(function(item) { return item != category }); 
    setCategories(filtered)
  }

  return(
    <>
      <Head>
        <title>Gifs App</title>
      </Head>

      <h1>Gifs App</h1>
      <h4><Link href="/">Back</Link></h4>

      <CategoryForm addCategory={addCategory}/>
    
      {
        categories.map(item => (
          <GifGrid  
            key={item}
            category={item}
            remove={removeCategory}
          />
        ))
      }

    </>
  )
};

