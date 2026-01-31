import React from 'react'

function Eg1_info({ name, age, city, email }) {
  return <>
   <div>
    <h1>Name is :{name}</h1>
    <p> Age: {age}</p>
    <p> City:  {city}</p>
    <p> Email: {email}</p>
   </div>
  </>;
}

export default Eg1_info
