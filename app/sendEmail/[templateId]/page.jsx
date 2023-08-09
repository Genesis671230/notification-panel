"use client"
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

  const [emailTemplate, setEmailTemplate] = useState();

  
  useEffect(() => {
    // const templateId =  window.location.pathname.split("/")
    const designsHtml = JSON.parse(localStorage.getItem("emailsHtml"))
    if(designsHtml!==undefined&&designsHtml!==null&&designsHtml[0]){

      designsHtml.filter((design,index)=>index === params.templateId)  
      setEmailTemplate(designsHtml[0])
    }
  }, []);
  console.log(emailTemplate);


  return (
    <div className='flex'>
      <div className='flex-1' dangerouslySetInnerHTML={{__html:emailTemplate}}>

      </div>
      <div className='flex-1'>
        <Input/>
      </div>
    </div>
  )
}

export default page