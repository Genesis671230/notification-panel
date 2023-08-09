"use client"
import React, { useEffect, useState } from 'react'
import Chats from '../chats/Chats'
import { Link } from 'lucide-react';
// import { useRouter } from 'next/router';

const Dashboard = () => {
  const [allEmailsHtml, setAllEmailsHtml] = useState([]);
  // const router= useRouter()

  useEffect(() => {
    const designsHtml = JSON.parse(localStorage.getItem("emailsHtml"))
    // if(designsHtml!==undefined&&designsHtml!==null&&designsHtml[0]){
      setAllEmailsHtml(designsHtml)
    // }
  }, []);
  console.log(allEmailsHtml);
  return (
    <div className='flex hide-scrollbar'>
      {allEmailsHtml?.map((design,index)=>(

        <div className='h-auto my-20 w-[20rem]' onClick={()=>window.location= (`sendEmail/${index+1}`)}>
        <div>
            <span className='bg-black text-white  p-10'>{index+1}</span>
        {/* <div dangerouslySetInnerHTML={{__html:design}}>
        </div> */}
        </div>
         </div>
      ))}
        {/* <Chats/> */}
    </div>
  )
}

export default Dashboard