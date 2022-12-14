import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "@remix-run/react";
import globalStyles from '~/styles/global.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

export const links = () => [{rel: 'stylesheet', href: globalStyles}]
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `menu ${key}`,
}));
export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
  description: 'descript',
  keysword: 'remix, react, javascript'
});

export default function App() {
  return (
<Document title={'This is TITLE'}>
  <MyLayout>
  <Outlet />
  </MyLayout>
</Document>
  );
}

function Document({children, title}) {
  return (
    <html lang="en">
    <head>
 
      <title>{title? title : 'welcome to my remix blog'}</title>
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
  )
}


function MyLayout ({children}){
  const { Header, Footer, Sider, Content } = Layout;

  return ( 
    <>
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    <nav className="navbar">
      <Link to="/" className= 'logo'>
        Remix
      </Link>
      <ul className="nav">
        <li>
          <Link to='posts'> Posts fddfd</Link>
        </li>
        <li>
          <Link to='/auth/login'> Login </Link>
        </li>
      </ul>
    </nav>
    <div className="container"> {children} </div>
    </>
  )
}

export function ErrorBoundary({error}){
  console.log(error)
  return (
    <Document>
      <Layout>
    <div>
      <h1>
        Error
      </h1>
      <pre>
        {error.message}
      </pre>
    </div>
    </Layout>


    </Document>
  )
}