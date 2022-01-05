import React,{useState,useEffect} from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import './currency.css'
export default function Currencyconvert(props) {
    const {countries,amounts}=props
    
    const [chgamount,setchgamount]=useState()
//  console.log(amounts,'component')
// console.log(Object.entries(amounts),'amounts')
   const calculateamount=(amt)=>{
    Object.entries(amounts).map((data)=>{
        if(data[1]==`USD`+`${amt}`){
        setchgamount(amount*data[0])
        }
    }
       
    )
   }
//    useEffect(()=>{
//     calculateamount()
//    },[])


   
    // Object.entries(countries).map((data)=>{
    
    const [drop,setdrop]=useState(false)
    const [choose,setchoose]=useState('choose')
    const [amount,setamount]=useState()
    const countryupdate = async(data)=>{
      await setchoose(`${data}`)
        if(data!='choose')
       { setdrop(!drop)  }

    }
    return (
        <div className='currencyconvert'>
            <input type='text' className='input' value={amount} onChange={(e)=>{setamount(e.target.value)}} />
            <div className='maindrop'>
                <div className='dropdown' onClick={()=>setdrop(!drop)}>
                    <p>{choose}</p><AiOutlineDown id='icon' size='20px' />
                </div>
                {(drop)?
                <div className='drop'>
                   
                        {Object.entries(countries).map((data)=>(
                             <div className='dropcomp'  onClick={()=>countryupdate(data[0])}>
                                 <div id='country'>
                                     <p id='p1'>{data[1]}</p>
                                     <p id='p'>{data[0]}</p>
                                 </div>
                           
                            {(amount && choose!='choose')?
                           
                               
                            <div className='amount'>
                            {calculateamount()}
                                 <p>{data[0]}</p><p>{chgamount}</p>
                                    
                                </div>

                               
                              
                               :<a></a>}
                           </div>

                        

                        ))}
                       
                      
                    

                </div>: <a></a>}
            </div>
           
           
            
               
        </div>
    )
}
