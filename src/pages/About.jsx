import { useState } from "react"
import { Navigate } from "react-router-dom"


const About = () => {
  const [user,setUser]=useState('uma')
  if(!user){
    return <Navigate to='/' replace={true}/>
  }
  return (
    <div className="about">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio explicabo molestias cumque impedit eos odit similique placeat, consequatur labore sint omnis obcaecati ipsa voluptatum, soluta adipisci recusandae. Natus aliquid vero rerum optio quis fuga ratione, asperiores eum pariatur, sapiente adipisci ad perspiciatis laborum. Quod voluptate enim consequuntur corporis. Sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio explicabo molestias cumque impedit eos odit similique placeat, consequatur labore sint omnis obcaecati ipsa voluptatum, soluta adipisci recusandae. Natus aliquid vero rerum optio quis fuga ratione, asperiores eum pariatur, sapiente adipisci ad perspiciatis laborum. Quod voluptate enim consequuntur corporis. Sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio explicabo molestias cumque impedit eos odit similique placeat, consequatur labore sint omnis obcaecati ipsa voluptatum, soluta adipisci recusandae. Natus aliquid vero rerum optio quis fuga ratione, asperiores eum pariatur, sapiente adipisci ad perspiciatis laborum. Quod voluptate enim consequuntur corporis. Sit.</p>
      <button onClick={()=>setUser(null)}>Logout</button>
    </div>
  )
}

export default About
