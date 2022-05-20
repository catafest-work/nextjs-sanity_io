import { getClient } from "../lib/sanity.server"
import groq from 'groq'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'

const Home = ({ posts }) =>  {
  // console.log(posts) // this works well
  return (
    <div >
     <Head>
       <title>Nomad Travel Blog</title>
       <meta name="viewport" content="initial-scale=1.0 , width=device-width"/>
     </Head>
     <div className ="posts-container">
       {posts?.map((post) => (
        <Link 
        key={post._id} 
        href="/"
        >
        <Card post={post} />
        </Link>
       ))}
     </div> 
    </div>
  )
}

/*
Eroare incarcare imagini 

Server Error
Error: Unable to resolve image URL from source (undefined)

This error happened while generating the page. ...

*/
// export async function getStaticProps({ preview = false }) {
//   const posts = await getClient(preview).fetch(groq`
//   *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
//     _id,
//     title, 
//     "username": author->username,
//     "categories": categories[]->{id, title},
//     "authorImage": author->avatar,
//     body, 
//     mainImage, 
//     slug,
//     publishedAt}`)
//     return {
//       props: {
//         posts,
//       },
//     }
// }

export async function getStaticProps() {
  const client = getClient()
  const query = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {  _id, title, "username": author->username, }`
  const posts = await client.fetch(query)
  return {
    props: {
      posts,
    },
  }
}



export default Home
