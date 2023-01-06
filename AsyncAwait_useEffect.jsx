import './App.css';
import { useEffect, useRef, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)

  let effectRan = useRef(false)

useEffect(() => {
  console.log("effect ran")
  setLoading(true);
if(effectRan.current === false){
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const json = await response.json()
    console.log(json)
    setData(json)
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
        data? (data.title) : (<Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>)
      }

    </div>
  );
}

export default App;
