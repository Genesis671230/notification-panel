"use client"
import React, { useEffect, useRef, useState } from 'react'
import EmailEditor from 'react-email-editor';
import sample from "@/lib/sample.json"
const page = () => {


  const [allDesigns, setAllDesigns] = useState([]);
  const [allEmailsHtml, setAllEmailsHtml] = useState([]);

  const emailEditorRef = useRef(null);
  console.log("emailEditorRef 1", emailEditorRef);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("emailEditorRef 2", emailEditorRef);

      console.log(allEmailsHtml);
      localStorage.setItem("emailsHtml", JSON.stringify([...allEmailsHtml, html]))

      console.log("exportHtml", html);
      alert("Output HTML has been logged in your developer console.");
    });
  };

  // const saveDesign = () => {
  //   emailEditorRef.current.editor.saveDesign((design) => {
  //     console.log("saveDesign", JSON.stringify(design, null, 4));
  //     alert("Design JSON has been logged in your developer console.");

  //     localStorage.setItem("emails", JSON.stringify([...allDesigns, design]))
  //   });
  // };

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log("saveDesign", JSON.stringify(design, null, 4));
      alert("Design JSON has been logged in your developer console.");
  
      const designId = generateUniqueId(); // Generate a unique ID
  
      const savedDesigns = JSON.parse(localStorage.getItem("emails")) || [];
  
      // Check if a design with the same ID exists in the saved designs
      const existingDesignIndex = savedDesigns.findIndex((savedDesign) => savedDesign.id === 0);
  
      if (existingDesignIndex !== -1) {
        // Update the existing design with the new design content
        savedDesigns[existingDesignIndex].design = design;
      } else {
        // Create a new design object with ID and design data
        const designObject = {
          id: designId,
          design: design
        };
        savedDesigns.push(designObject);
      }
  
      // Save the updated savedDesigns array in localStorage
      localStorage.setItem("emails", JSON.stringify(savedDesigns));
    });
  };
  
  // Function to generate a unique ID (You might want to use a library for this)
  function generateUniqueId() {
    // Logic to generate a unique ID
    const savedDesigns = JSON.parse(localStorage.getItem("emails")) || [];
    return savedDesigns?.length+1
  }
  

  const onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
    
  };
  
  const onLoad = () => {
    emailEditorRef.current.editor.addEventListener(
      "onDesignLoad",
      onDesignLoad
      );
      
    const designs = JSON.parse(localStorage.getItem("emails"))


    // setAllDesigns(designs)

    if (designs && designs !== undefined && designs !== null && designs[0]) {

      emailEditorRef?.current?.editor?.loadDesign(designs[0].design)
    
    } else {
    
      emailEditorRef?.current?.editor?.loadDesign(sample)
    
    }

  };

console.log(allEmailsHtml);


  useEffect(() => {
    const designs = JSON.parse(localStorage.getItem("emails"))
    const designsHtml = JSON.parse(localStorage.getItem("emailsHtml"))

    if (designs && designs !== undefined && designs !== null && designs[0]) {

      setAllDesigns(designs)
    }
    if (designsHtml && designsHtml !== undefined && designsHtml !== null && designsHtml[0]) {
      setAllEmailsHtml(designsHtml)
    }
  }, []);

  return (
    <div className="container">
      <div className='flex  flex-column gap-6 mt-[28px]'>
        <button className='bg-gray-400 py-2 px-4 rounded font-bold text-white' onClick={saveDesign}>Save Design</button>
        <button className='bg-gray-500 py-2 px-4 rounded font-bold text-white' onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor key={1} ref={emailEditorRef} onReady={onLoad} minHeight="90vh" />
    </div>
  );
}

export default page