import { useActionData } from "@remix-run/react"
import {db} from '~/utils/db.server'
import { redirect } from "@remix-run/node"
import { json } from "@remix-run/node"
function badRequestttt(data) {
    return json(data, { status: 400 })
  }

function validateUsername(username){
    if(typeof username !== 'string' || username.length < 3)
        return 'username must not be empty'
}

function validatePassword(password){
    if(typeof password !== 'string' || password.length < 3)
        return 'password must not be empty'
}
export const action = async({request}) => {
    const form = await request.formData()
    console.log('form data = '+ form)
    const loginType = form.get('loginType')
    const username = form.get('username')
    const password = form.get('password')

    const fields = {loginType, username, password}

    const fieldErrors = {
        username: validateUsername(username),
        password: validatePassword(password)
    }
    console.log('fields error = '+ JSON.stringify(fieldErrors))

    if(Object.values(fieldErrors).some(Boolean)){
        return badRequestttt({fieldErrors, fields})
    }

    return redirect('/posts')

}

function Login() {
    const actionData = useActionData()
  return (
    <div className='auth-container'>login
        <div><h1>Login</h1></div>
        <div className="page-content">
            <form method="post">
                <fieldset>
                    <legend>
                        Login or register

                        </legend>
                        <label>
                            <input type='radio' name='loginType' value='login' defaultChecked={!actionData?.fields?.loginType || actionData?.fields?.loginType === 'login'}/> Login
                            </label>
                        <label> 
                            <input type='radio' name='loginType' value='register' defaultChecked={actionData?.fields?.loginType === 'register'}/> Register
                            </label>

                </fieldset>
                <div className="form-control">
                <label htmlFor="username">
                Username
                </label>
                <input type='text' name='username' id='username'></input>
                <div className="error"> {actionData?.fieldError?.username && actionData?.fieldError?.username} </div>
                </div>                
                <div className="form-control">
                <label htmlFor="password">
                Password
                </label>
                <input type='password' name='password' id='password'></input>
                <div className="error"></div>
                </div>

                <button type='submit' className="btn btn-block"> submit </button>
            </form>
        </div>
    </div>
  )
}

export default Login