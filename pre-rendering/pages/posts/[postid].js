// import { useRouter } from 'next/router'

// function Post({post}){
//     const router = useRouter()

//     if(router.isFallback){
//         return<h1>Loading...</h1>
//     }
//     return(
//         <>
//             <h2>{post.id} {post.title}</h2>
//             <p>{post.body}</p>
//         </>
//     )
// }

// export default Post

// export async function getStaticPaths(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
    
//     const paths = data.map(post => {
//         return {
//             params : `${post.id}`
//         }
//     })
//     return{
//         // 
//         paths,
//         fallback:false,//true,blocking
//     }
// }

// export async function getStaticProps(context){
//     const { params } = context
//     const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${params.postId}`
//         )
//     const data = await response.json()
    
//     if(!data.id){
//         return{
//             notFound: true,
//         }
//     }

//     console.log(`Generating pages for post/${params.postId}`)

//     return {
//         props: {
//             post: data,
//         },
//     }
// }