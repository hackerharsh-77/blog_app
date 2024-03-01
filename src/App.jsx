import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {Header} from "./components/";
import { Footer } from './components';
import { login } from './store/authSlice';
import { logout } from './store/authSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
      authService.getCurrentUser()
      .then((useData)=>{
        if(useData){
          dispatch(login(useData))
        }else{
          dispatch(logout())
        }
      })
      .finally(()=>{
        setLoading(false)
      })
  },[])

  return !loading ? <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className="w-full block">
      <Header />
      <main>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  </div> : null

  // return (
  //   <>
  //     <h1>A blog with apprwrite</h1>
  //   </>
  // )
}

export default App
