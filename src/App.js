import React,{useEffect,useState} from 'react'
import Currencyconvert from './components/currencyconvert'
import './App.css'
import axios from 'axios'
export default function App() {
  // async function data()
  // {
    
  //   const response = await fetch('http://api.currencylayer.com/list?access_key=6c1bae4bdf29f70ef95ed3288daffded',{
  //     method:'GET',
      
     
  //   }).then((data)=>{
  //     let res = []
  //     res=  data

  //     // console.log(res)
  //     // return data
  //   }).catch((e)=>{
  //     console.log('error')
  //   })
  //   // console.log(response)
  
  
  // }
  const [country,setcountry]=useState()
  const [amount,setamount]=useState()
//  var country = []
  const url = 'http://api.currencylayer.com/list?access_key=6c1bae4bdf29f70ef95ed3288daffded'
  const conversionurl = 'http://apilayer.net/api/live?access_key=6c1bae4bdf29f70ef95ed3288daffded&format=100'
  const data = async ()=>{
   
   await axios.get(url).then((d)=>{
      // console.log(d.data.currencies,'data')
      
      setcountry(d.data.currencies)
      // console.log(Object.entries(country),'country')
    
    })
     axios.get(conversionurl).then((data)=>{
      console.log(data)
      setamount(data.data.quotes)
    })
  }
  console.log(amount,'data')
 useEffect(() => {
   
   data()
 }, [])
  return (
    <div className='currency'>
     
      <h2 id='heading'>Currency converter</h2>
      <Currencyconvert countries={country} amounts={amount}/>
      

    </div>
  )
}

