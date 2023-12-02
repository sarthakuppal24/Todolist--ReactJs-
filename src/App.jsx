import { useState } from "react"


function App() {

  const[title,settitle]=useState("");
  const[desc,setdesc]=useState("");
  const[maintask,setmaintask]=useState([]);

  let submithandler = (e)=>{
    e.preventDefault();
    setmaintask([...maintask,{title,desc}]);
    setdesc("");
    settitle("");
  }

  let deletehandler = (indx)=>{
    let copyTask = [...maintask];
    copyTask.splice(indx,1);
    setmaintask(copyTask);
  }
  

  let defaulttext = <h2>No Task Available</h2>;

  if(maintask.length>0){
    defaulttext=maintask.map((key,indx)=>{
      return(
        <li className="flex items-center justify-between mb-8" key={indx}>
          <div className="flex items-center justify-between w-[80%]">
            <h4 className="text-md font-semibold">{key.title}</h4>
            <h4 className="text-md font-semibold">{key.desc}</h4>
          </div>
          <button className="bg-red-500 p-1 rounded-md hover:bg-red-400" onClick={()=>{deletehandler(indx)}}>Delete</button>
        </li>)
  
    })
  }
  return (
    <>
      <h1 className="text-center text-4xl font-semibold pt-2">To-Do List</h1>
      <form onSubmit={submithandler}>
        <input type="text" className="title border-teal-700 border-2 h-10 w-[30%] mt-12 mx-24 p-1 text-lg font-medium" placeholder="Enter Task" value={title} onChange={(e)=>{settitle(e.target.value);}}/>
        <input type="text" className="desc border-teal-700 border-2 h-10 w-[30%] mt-12 p-1 text-lg font-medium" placeholder="Enter Description" value={desc} onChange={(e)=>{setdesc(e.target.value);}} />
        <button className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md mx-16">Add</button>
      </form>
      <div className="mt-12 bg-slate-300 p-4">
        <h2 className="text-center font-medium">{defaulttext}</h2>
      </div>
    </>
  )
}

export default App
