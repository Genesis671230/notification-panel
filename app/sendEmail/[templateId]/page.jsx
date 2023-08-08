"use client"
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
    <div>SendEmail</div>
  )
}

export default page