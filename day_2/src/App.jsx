import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Components/Products/Products'
import User from './Components/Users/User'
import ContextButtonComponent from './Components/Hooks/Context/Button'
import ContextTextComponent from './Components/Hooks/Context/Text'
import UseReducerExample from './Components/Reducer/ReducerEg'
import Out from './Components/Practice/Out'
function App() {
  const [count, setCount] = useState(0)

  const ProductName = ['Product1','product2','product3']

  return (
    <>
      <div>
        <h2>This just for learning</h2>
        {/* <Products name={"user1762"} refno={2345} ProductDetail={ProductName} 
          City={"madurai"}
        /> */}
        {/* <User /> */}
        {/* <ContextButtonComponent />
        <ContextTextComponent /> */}
        <UseReducerExample />
        {/* <Out /> */}
      </div>
    </>
  );
}

export default App
