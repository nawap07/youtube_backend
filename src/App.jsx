import { useEffect } from "react";
import { useState } from "react";
import './App.css'
// import Data from "./components/apps/Data";
// import Lists from "./components/apps/Lists";
// import Show from "./components/apps/Show";
// import PasswordGenerater from "./components/apps/PasswordGenerater";
// import Game from "./components/apps/TikTakTeo";
import ReduxToolkit from "./components/apps/ReduxToolkit";
// import StopWatch from "./components/apps/StopWatch";
// import Watch from "./components/apps/Watch";
// import Memo from "./components/apps/Memo";
// import Password from "./components/apps/Password";
// import Index from "./components/accordion/Index";
// import  RandomColor from "./components/randomColor";

// import Accordation from "./Accordation";
// import RandomColors from "./components/apps/RandomColors";
// import StarRating from "./components/starRating";
// import StarRatings from "./components/apps/StarRating"
// import ImageSlider from "./components/imageSlider"
// import ImageSliders from "./components/apps/ImageSlider"
// import WeatherApp from "./components/weather";
import Weather from "./components/apps/Weather";
const getLocalData=()=>{
  const lists=localStorage.getItem("Data");
  if(lists){
     return JSON.parse(lists)
  }else{
    return [];
  }
}

 const App=()=>{
 
  const[input,setInput]=useState("");
  const[data,setData]=useState(getLocalData());
  const[edit,setEdit]=useState("");
  const[toggle,setToggle]=useState(false);

  useEffect(()=>{
    localStorage.setItem("Data",JSON.stringify(data));
  },[data])

  const addData=(e)=>{
    e.preventDefault();
    if(!input){
      alert("Please fill the Data")
    }else if(edit && toggle){
      setData(
        data.map((elem)=>{
          if(elem.id === edit){
            return{...elem,name:input}
          }
          return elem;
        })
      )
      setEdit(null);
      setInput("");
      setToggle(false)
    }
    
    else{
      const inpuDatas={
        id:new Date().getTime().toString(),
        name:input
      }
      setData([...data,inpuDatas]);
      setInput("");
    }
  }

  const setDeleteData=(index)=>{
    const deletElm=data.filter((elm)=>{
     return elm.id !== index;
    })
    setData(deletElm)
  }

  const setEditData=(index)=>{
    const editData=data.find((elm)=>{
       return elm.id === index;
    })
    setInput(editData.name);
    setEdit(index)
    setToggle(true);
  }

  const remove=()=>{
    setData([]);
  }
  return(
    <>
<Weather/>
    {/* <WeatherApp/> */}
{/* <ImageSliders url={'https://picsum.photos/v2/list'} limit={'8'}/>
    <ImageSlider url={"https://picsum.photos/v2/list"} limits={'5'} /> */}
    {/* <StarRatings noOfStars={10}/>
    
<StarRating noOfStars={20}/>

<RandomColors/>

    <RandomColor/>
    
    <Accordation/>
    <h1>Pawan</h1>
<Index/>

    <Password/>
    <Memo/>
    <Watch/>
    <br />
    <StopWatch/>
    <Game/>
    <PasswordGenerater/>
    <Show/>
    <Lists/>
    <Data/> */}
    <ReduxToolkit/>

     <div className="TodoContainer">
     <h2>TodoList</h2>
    <form onSubmit={addData}>
      <input type="text" placeholder="Add Data" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button>Add</button>
    </form>
    {
      data.map((elm)=>(
        <div className="datas" key={elm.id}>
          <h2>{elm.name}</h2>
          <button onClick={()=>setDeleteData(elm.id)}>Delete</button>
          <button onClick={()=>setEditData(elm.id)}>Edit</button>
        </div>
      ))
    }
    <div className="">
      <br />
      <button onClick={remove}>Remove</button>
    </div>
     </div>
    </>
  )
 }

 export default App;

 