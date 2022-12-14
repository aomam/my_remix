import { Outlet } from "@remix-run/react"

function Posts() {
    return (
        <div>
            <h1>
                This is the posts route
                <Outlet />
            </h1>
        </div>
    )
}

export default Posts