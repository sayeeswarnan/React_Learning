import React from 'react'
import Eg1 from './Eg1'

function Out() {

const data = [
    {id:1,name:"user 1",age:21,email:"sample1@gmail.com"},
    {id:2,name:"user 2",age:21,email:"sample2@gmail.com"},
    {id:3,name:"user 3",age:21,email:"sample3@gmail.com"}
]

  return (
    <div>
      {/* {data.map( 
        user=>
        (   
            <Eg1 key={user.id} {...user}  />
        )

     )}  */}
      {/* <Eg1 id={1} age={22} name={"user"} email={"sample3@gmail.com"}
      
      /> */}
    </div>
  );
}

export default Out
