import React from 'react'
import './Products.css'


function  Products(props) {
   let border="2px solid red"
    const arr=props.arr;
    // console.log(arr)
  return (
    <>
      {/* <h1>propes components</h1> */}
      <div>
      {
      arr.map((value,i)=>{
        return (
            <div key={i} style={{border}}>
              <h1>naam={value.name}</h1>
              <img src={value.image} alt="" />
              <h1>age={value.age}</h1>
            </div>
        )
      })
      }
      </div>
     
    </>
  )
}

export default Products