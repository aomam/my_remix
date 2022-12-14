import { Link, useActionData } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { db } from '../../utils/db.server.ts'
import { json } from "@remix-run/node"
import { Button, DatePicker, Space, version } from "antd";
import { useSubmit, useTransition } from "@remix-run/react";
import { Form } from "@remix-run/react";
function validateTitle(title){
  if(title.length < 3){
    return 'Title should be atleast 3 characters long'
  }
}

function validateBody(body){
  if(body.length < 10){
    return 'Body should be atleast 10 characters long'
  }
}

function badRequestttt(data) {
  return json(data, { status: 400 })
}


export const action = async ({request}) => {
  const form = await request.formData()
  const title = form.get('title')
  const body = form.get('body')
  // const user = await getUser(request)

  const fields = { title, body }
  const fieldErrors = {
    title: validateTitle(title),
    body: validateBody(body),
  }
  console.log('title = ',title)
  console.log('body = ',body)

  if (Object.values(fieldErrors).some(Boolean)) {
    console.log(fieldErrors)
    return badRequestttt({ fieldErrors, fields })
  }

  const post = await db.post.create({ data: { ...fields} })
  console.log('post = ',post)

  return redirect(`/posts/${post.id}`)
}

function NewPost() {
  const actionData = useActionData()

  return (
    <div>
      <div className="page-header">
        <h1>new post
        </h1>
        <Link to='/posts' className="btn btn-reverse">
          Back
        </Link>

        <div className="page-content">
          <Form method= 'POST'>
            <div className="form-control">
              <label htmlFor="title" >Title</label>
              <input type="text" name='title' id='title' defaultValue={actionData?.fields?.title}></input>
              <div className="error"> <p>{actionData?.fieldErrors?.title && actionData?.fieldErrors?.title} </p></div>
            </div>
            <div className="form-control">
              <label htmlFor="body" >Post body</label>
              <textarea name='body' id='body' defaultValue={actionData?.fields?.body}></textarea>
              <div className="error"> {actionData?.fieldErrors?.body && actionData?.fieldErrors?.body} </div>
            </div>
            <Button type = 'primary' htmlType="submit">
              Add Post
              
            </Button>
          </Form>
        </div>
        </div>
    </div>
  )
}

export default NewPost

