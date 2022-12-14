import Head from 'next/head'
import Link from 'next/link'
import Testimony from '../components/Testimony'

export default function testimonials() {

  const persons = [
    {
      image: "person_1",
      name: "Jessica",
      rank: "Space Engineer",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ab dolore perspiciatis, provident incidunt quos cupiditate sequi necessitatibus cum, voluptatum debitis obcaecati deserunt aliquam sapiente quia eum vitae perferendis voluptatibus."
    },
    {
      image: "person_2",
      name: "John",
      rank: "Industrial Engineer",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ab dolore perspiciatis, provident incidunt quos cupiditate sequi necessitatibus cum, voluptatum debitis obcaecati deserunt aliquam sapiente quia eum vitae perferendis voluptatibus."
    },
    {
      image: "person_3",
      name:"Patricia",
      rank: "Project Manager",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ab dolore perspiciatis, provident incidunt quos cupiditate sequi necessitatibus cum, voluptatum debitis obcaecati deserunt aliquam sapiente quia eum vitae perferendis voluptatibus."
    },
    {
      image: "person_4",
      name:"Sandra",
      rank: "Product Manager",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ab dolore perspiciatis, provident incidunt quos cupiditate sequi necessitatibus cum, voluptatum debitis obcaecati deserunt aliquam sapiente quia eum vitae perferendis voluptatibus."
    },
  ]

  return(
    <>
    
      <Head>
        <title>Testimonials</title>
      </Head>

      <h1>Testimonials</h1>
      <h3><Link href="/">Back</Link></h3>

      <div className='testimonials_container'>

        {
          persons.map(item => (
            <Testimony
              key={item.name}
              image={item.image}
              name={item.name}
              rank={item.rank}
              description={item.description}
              />
          ))
        }
        
      </div>
    </>
  )
};
