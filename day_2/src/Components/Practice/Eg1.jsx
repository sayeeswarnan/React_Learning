import React from 'react'
import Eg1_info from './Eg1_info'

function Eg1({id,...rest}) {
  return (
    <div>
        <h1>the id is : {id}</h1>
      <Eg1_info {...rest} />
    </div>
  )
}

export default Eg1
