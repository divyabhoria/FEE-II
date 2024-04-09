import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Products'

function App() {

  const arr=[
    {
      name:"vikas patel",
      // image:"https://www.kasandbox.org/programming-images/avatars/purple-pi.png",
      image:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
      age:26
    },
    {
      name:"rohit patel",
      image:"https://www.kasandbox.org/programming-images/avatars/purple-pi.png",
      age:21
    },
    {
      name:"akash patel",
      image:"https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png",
      age:18
    }
  ]

  return (
    <>
        <Products arr={arr} />
    </>
  )
}

export default App
