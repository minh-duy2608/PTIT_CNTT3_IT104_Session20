import React, { useState } from 'react'


export default function Bai01() {
    const [input,setInput] = useState<number>(0)
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
       setInput(e.target.value.length) 
    }
  return (
    <div>
      <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
      <input onChange={handleChange} type="text" placeholder='Nhập vào đây' />
      <div style={{backgroundColor:"red", color:"white"}}>
        Chuỗi nhập vào dài hơn 5 kí tự!
      </div>
    </div>
  )
}
