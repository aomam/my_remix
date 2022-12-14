import { useParams, useLoaderData } from "@remix-run/react"
import {db} from '~/utils/db.server'
import { Link } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { Button } from 'antd';
import { Form } from "@remix-run/react";

export const loader = async ({params}) => {
  const post = await db.post.findUnique({
    where: {id: params.postId}
  })
  if(!post)
  throw new Error ('Post not found')
  const data = {post}
  return data
}

export const action = async ({ request, params }) => {
  const form = await request.formData()
  if (form.get('_method') === 'delete') {
    const post = await db.post.findUnique({
      where: { id: params.postId },
    })

    if (!post) throw new Error('Post not found')
    else console.log('post to delete found')
    await db.post.delete({ where: { id: params.postId } })  
    return redirect('/posts')
  }
}


function Post() {
  const {post} = useLoaderData()
  const params = useParams()
  return (
    
    <div><h1> Post {post.title}</h1>
    <Link to='/posts' className= 'btn btn-revers'> Back </Link>
        <div className="page-content">
      {post.body}
    </div> 
    <div className="page-footer">
      <form method= "POST">
        <input type='hidden' name="_method" value='delete'></input>
        <Button type='primary' htmlType = 'primary'> delete </Button>
      </form>
    </div>

    </div>


  )
}

export default Post