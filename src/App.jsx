import { useState } from 'react'
import './App.css';
import { BrowserRouter,Link,Route,Routes }  from 'react-router-dom'
import Login from './components/Login';
import Home from './container/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
<div>
<Routes>
  <Route path='login' element={<Login/>}/>
  <Route path='/' element={<Home/>}/>
</Routes>
</div>
</BrowserRouter> 
  
    </>
  )
}

export default App
