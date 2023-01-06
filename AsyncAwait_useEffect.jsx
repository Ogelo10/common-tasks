import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
const [data, setData] = useState([])
// const [loading, setLoading] = useState(false)
// console.log(data)

  let effectRan = useRef(false)

useEffect(() => {
  console.log("effect ran")
  // setLoading(true);
if(effectRan.current === false){
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const json = await response.json()
    console.log(json)
  }
  // const fetchUsers = async () => {
  //   let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then(res => res.json())
  //     .then(val => {
  //       setData(val)
  //       console.log(val)
  //     })
  //     .catch(err => console.log(err))
  // }
  fetchUsers()

return () => {
  console.log('unmounted')
  effectRan.current = true
}
}}, [])



  return (
    <div className="App">
      {
        data.title
        // loading? (data.title) : ("Loading")
      }
    </div>
  );
}

export default App;
