import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css';
import LoadingBar from 'react-top-loading-bar';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Head from 'next/head'





function MyApp({ Component, pageProps }) {

  const router = useRouter()
  
  
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({value: null})
  

  const [isFooter, setIsFooter] = useState(true);

  useEffect(() => {
    if(router.pathname === '/admin' || router.pathname === '/admin/dashboard' ){
      setIsFooter(false)
    }
    if(user.value == null){
    if(router.pathname === '/profile'){
      router.push('login')
    }}
  }, []);
 
 

  useEffect(() => {
   let token = localStorage.getItem('A1NextProfile')
   if(token){
    token = JSON.parse(token)
      setUser({value:token})
   }else{
    setUser({value:null})
   }

  }, [router.query]);



  useEffect(() => {
   router.events.on('routeChangeStart', ()=> {
    setProgress(40)
   })
   router.events.on('routeChangeComplete', ()=> {
    setProgress(100)
   })
    
  }, []);


  return <>
      <Head>
        <title>A1Agriculture ! The Agri world...</title>
        <meta name="description" content="A1Agriculture ! welcome to the agri world" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LoadingBar
        color='#6366f1'
        waitingTime='400'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        />
      <Navbar user={user}/>
      <Component {...pageProps} user={user.value} />
      {
        isFooter ? <Footer/> : ""
      }
      
      </>
}

export default MyApp
