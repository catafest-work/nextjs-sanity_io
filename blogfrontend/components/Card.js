import { urlFor } from '../lib/sanity'
// nu trimite valori la post 
//console.log(post) // ReferenceError: post is not defined
const Card = (post) => {
  return (
  <div className="card-container">
    <h2>
      {post.title}
    </h2>
    {/* <p>Published on: {new Date(post.publishedAt).toDateString()}</p> */}
    {/* <img className="main-image" 
      alt={post.title + 'image'}
      src={urlFor(post.mainImage)} 
      /> */}
    <hr/>
    <div className="info-container">
      {/* <p>Posted by : {post.username}</p> */}
      {/* <img className="avatar" 
      src={urlFor(post.authorImage)} 
      alt={post.username + ' avatar '} /> */}
    </div>
    <div className= "tag-container">
      {/* {post.categories.map((category) => (
        <Tag key={category.id} title={category.title}/>
      ))} */}
    </div>
  </div>
  )
}
export default Card