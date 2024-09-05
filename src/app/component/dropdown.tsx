"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { text } from 'stream/consumers';
import Link from 'next/link';




const Dropdown = () => {

 const [colour, setcolour] = useState(false);
 const handleColor =()=>{

  setcolour((prev)=>!prev)
  
 }

 const [colour1, setcolour1] = useState(false);
 const handleColor1 =()=>{

  setcolour1((prev)=>!prev)
  
 }

 const [colour2, setcolour2] = useState(false);
 const handleColor2 =()=>{

  setcolour2((prev)=>!prev)
  
 }

 const [colour3, setcolour3] = useState(false);
 const handleColor3 =()=>{

  setcolour3((prev)=>!prev)
  
 }


 const [colour4, setcolour4] = useState(false);
 const handleColor4 =()=>{

  setcolour4((prev)=>!prev)
  
 }


 const [colour5, setcolour5] = useState(false);
 const handleColor5 =()=>{

  setcolour5((prev)=>!prev)
  
 }



 const [colour6, setcolour6] = useState(false);
 const handleColor6 =()=>{

  setcolour6((prev)=>!prev)
 }


 const [colour7, setcolour7] = useState(false);
 const handleColor7 =()=>{

  setcolour7((prev)=>!prev)
  
 }
    
  return (

<>   
 


<div className='bg-[rgb(228,240,238)] h-[850px] w-[100%]  relative top-[700px] flex-wrap flex-col '>

<h1 className='font-semibold text-[35px] text-[rgb(46,66,92)] relative top-[100px] left-[30%] lg:left-[50%] w-[10px]'>FAQs</h1>

 <div className= 'w-[320px] lg:w-[600px] flex-wrap flex-col relative top-[200px] left-[9%] lg:left-[35%] '> 

 <Accordion className=''>
      <AccordionSummary expandIcon={<ExpandMoreIcon className= { colour ? "hidden lg: flex-auto text-[rgb(106,198,116)]" : " hidden lg:flex "}/>}
      
        id="panel1-header"
        onClick={handleColor}
     
       className='font-semibold bg-[rgb(228,240,238)]'
      >
       <span className={ colour ?  "text-[rgb(106,198,116)]" : ""}>Are the programs on-sight or online</span> 
      </AccordionSummary>
      <AccordionDetails  className='font-[20px] text-[15px] bg-[rgb(228,240,238)]'>
      Our program is 100% online, Live training program within the comfort of your home. However, if you are interested in our physical program <Link href={'./click'} className='text-[rgb(106,198,116)]'>click here.</Link>
   
      </AccordionDetails>
    </Accordion>

    

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={colour1 ? "hidden lg: flex-auto text-[rgb(106,198,116)]" : " hidden lg:flex "}/>}
        aria-controls="panel2-content"
        id="panel2-header"
        onClick={handleColor1}

       className='font-semibold bg-[rgb(228,240,238)]'
      >
      <span className={ colour1 ?  "text-[rgb(106,198,116)]" : ""}>  What is the duration of a typical program?</span>
      </AccordionSummary>
      <AccordionDetails className='font-[20px] text-[15px] bg-[rgb(228,240,238)]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>



    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={colour2 ? "hidden lg: flex-auto text-[rgb(106,198,116)]" : " hidden lg:flex "}/>}
        aria-controls="panel3-content"
        id="panel3-header"
        onClick={handleColor2}
            
       className='font-semibold bg-[rgb(228,240,238)]'
      >
       <span  className={colour2 ? "text-[rgb(106,198,116)]" : ""}> Where are you located?</span>
      </AccordionSummary>
      <AccordionDetails className='font-[20px] text-[15px] bg-[rgb(228,240,238)]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
      
    </Accordion>
  


  
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon  className={colour3 ? "hidden lg: flex-auto text-[rgb(106,198,116)]" : " hidden lg:flex "}/>}
        aria-controls="panel2-content"
        id="panel2-header"
        onClick={handleColor3}
       className='font-semibold bg-[rgb(228,240,238)]'
      >
       <span  className={colour3 ? "text-[rgb(106,198,116)]" : ""} > Do you have Evening/ Part time classes?</span>
      </AccordionSummary>
      <AccordionDetails className='font-[20px] text-[15px] bg-[rgb(228,240,238)]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>



    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={colour4 ? "hidden lg: flex-auto text-[rgb(106,198,116)]" : " hidden lg:flex "}/>}
        aria-controls="panel3-content"
        id="panel3-header"
        onClick={handleColor4}
       className='font-semibold bg-[rgb(228,240,238)]'
      >
       <span className={colour4 ? "text-[rgb(106,198,116)]" : ""}> What time are your training on weekend?</span>
      </AccordionSummary>
      <AccordionDetails className='font-[20px] text-[15px] bg-[rgb(228,240,238)]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
     
    </Accordion>





    
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={colour5 ? "hidden lg: flex-auto text-[rgb(106,198,116)]" : " hidden lg:flex "} />}
        aria-controls="panel2-content"
        id="panel2-header"
        onClick={handleColor5}
       className='font-semibold bg-[rgb(228,240,238)]'
      >
       <span className={colour5 ? "text-[rgb(106,198,116)]" : ""}> Can i join a waiting list for an upcoming cohort?</span>
      </AccordionSummary>
      <AccordionDetails className='font-[20px] text-[15px] bg-[rgb(228,240,238)]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>



    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={colour6 ? "hidden lg: flex-auto text-[rgb(106,198,116)]" : " hidden lg:flex "}/>}
        aria-controls="panel3-content"
        id="panel3-header"
        onClick={handleColor6}
       className='font-semibold bg-[rgb(228,240,238)] border-[none] outline-none'
      >
        <span className={colour6 ? "text-[rgb(106,198,116)]" : ""}>when will the next season take place?</span>
        
      </AccordionSummary>
      <AccordionDetails className='font-[20px] text-[15px] bg-[rgb(228,240,238)]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
     
    </Accordion>





    
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon  className={colour7 ? "hidden lg: flex-auto text-[rgb(106,198,116)]" : " hidden lg:flex "}/>}
        aria-controls="panel2-content"
        id="panel2-header"
        onClick={handleColor7}
       className='font-semibold bg-[rgb(228,240,238)]'
      >
        <span className={colour7 ? "text-[rgb(106,198,116)]" : ""}>  Do i need a laptop</span>
      
      </AccordionSummary>
      <AccordionDetails className='font-[20px] text-[15px] bg-[rgb(228,240,238)]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>



       
    
 </div>

 <h1 className=' text-[rgb(46,66,92)] relative top-[220px] left-[20%] lg:left-[35%] w-[500px]' >Visit Our <Link href={'./faQ'} className='text-[rgb(106,198,116)]' >FAQ Page</Link> for more help</h1>
   
  </div>
</>

  )
}

export default Dropdown