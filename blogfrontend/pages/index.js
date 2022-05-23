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

       { // this test for map post ... 
       (posts && posts.length > 0) && posts.map(post => (
       
        //this source code show title: <li key={post.id}>{post.title} </li> 
        // need to fixed because next rows of source code don't let me use Link and Card, possible new React version changes   
        //posts?.map((post) => (
           <Link 
           key={post._id} 
           href="/"
           >
           <Card post={post} />
          
          {/* {console.log("Test : ",post)} */}
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

// test with few args - try to solve the image error , see first comments about send Link and Card posts data 
export async function getStaticProps({ preview = false }) {
  const client = getClient()
  const query = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {  _id, title, "username": author->username }`
  const posts = await client.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
export default Home
