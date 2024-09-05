import React from 'react'


const success=[
    { 
      id: 1,
      nums: "98%",
      txt: "Completion Rate",
    },
    
    { 
      id: 2,
      nums: "3000+",
      txt: "Succesful Graduates",
    },
    
    { 
      id: 3,
      nums: "20+",
      txt: "Partners",
    },
    
    { 
      id: 4,
      nums: "2000+",
      txt: "Success Stories",
    }
    
    
    
    ];
function Numbers() {



  return (
    <div>

<div className="relative h-[550px] w-scre bg-[rgb(223,242,239)] top-[150px]">

<div className="relative top-[150px] flex flex-col gap-[90px]">
<div className=" w-[300px] relative left-[3%] lg:left-[550px] flex flex-col gap-[20px]">
<p className="text-[rgb(46,66,92)] relative left-[100px]">Strength in Numbers</p>
<h1 className=" font-bold text-[35px] text-[rgb(46,66,92)] relative w-[600px] ">Strength in Numbers</h1>

</div>


<div className="relative flex flex-row gap-[4%] lg:gap-[28%] left-[4%] lg:left-[200px] w-[600px]">

{success.map((data=>(
<div key={data.id} >


<h1 className=" relative flex flex-row font-extrabold text-[20px] lg:text-[60px] text-[rgb(46,66,92)]">{data.nums}</h1>
<p className=" relative left-[-8px] lg:left-[6px] text-[10px] lg:text-sm"> {data.txt}</p>





</div>




)



))}
</div>
</div>

</div>


<div>

</div>
<div className="relative top-[300px] ">
<h1 className=" top-[60px] font-Roboto font-bold text-[35px] text-[rgb(37,67,107)] relative left-[15%] lg:left-[40%] w-[400px] ">Success Stories</h1>

</div>

    </div>
  )
}

export default Numbers