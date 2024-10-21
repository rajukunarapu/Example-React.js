import './App.css'
import { useState } from "react"

function Search(props){

    let [Search,setSearch]=useState("")

    return(
        <>
         <input type="text" value={Search} onChange={(e)=>{
            setSearch(e.target.value)
         }}/>
         <button onClick={()=>{
            props.add(Search)
            setSearch("")
         }}>Click</button>
        </>
    )
}

export default Search