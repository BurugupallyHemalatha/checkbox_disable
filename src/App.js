import React,{useState} from 'react'

const App =()=>{



  const[enable,setEnable]=useState(true)

 
  const [check,setChecked]=useState(false)





  // const [enable,setEnable] =useState(true)
  // const handleClick=()=>setEnable(false)
 const [disable,setDisabled]=useState(false)
  const [uncheck,setUnchecked]=useState(true)

 
 


  return(
   <div className="container row my-4 " style={{display:"flex", flexDirection:"row"}}>
      <div  style={{ width:"200px" }}class="card ">
         <form  class="" style={{backgroundColor:"lightgray"}} disabled={disable}>ROOM1          
             </form>
            <p class="card-name"> Adults 18+</p>
       <select style={{width:"50px"}} disabled={disable}  > 1
           
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            
       </select>
        
           <p class="card-name"> Children(0-17)</p>
       
     <select style={{width:"50px"}}> 0    
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
  
       </select>
         
      </div>




         <div  style={{ width:"200px",backgroundColor:"lightgray"}}class="card mx-3">
            <form  class="" >
              <input type="checkbox" checked={check}  onClick={()=>{setDisabled(false);setUnchecked(true);}}/>ROOM2
            </form>
                <p class="card-name"> Adults 18+</p>
                  <select style={{width:"50px"}} disabled={disable}  > 1
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                  </select>
         
      
            <form  class="d-flex">     
              <p class="card-name"> Children(0-17)</p>
            </form>
         <select style={{width:"50px"}}disabled={disable} > 0    
            <option value="0">0</option>
             <option value="1">1</option>        
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
           
       </select>
       </div>
  



      <div  style={{ width:"200px",backgroundColor:"lightgray"}}class="card ">
         <form  class="">
            <input type="checkbox" checked={check}  onClick={()=>{setDisabled(false);setUnchecked(true);}}/>ROOM3           
            </form>
             <p class="card-name"> Adults 18+</p>
       <select style={{width:"50px"}} disabled={check}> 1
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            
       </select>
      <form  class="">     
           <p class="card-name"> Children(0-17)</p>
        </form>
   <select style={{width:"50px"}} disabled={check}> 0   
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          
       </select>
      </div>




      <div  style={{ width:"200px",backgroundColor:"lightgray"}}class="card mx-3 ">
         <form  class="">
         <input type="checkbox" onClick={()=>{setEnable(false);setChecked(true);}} />ROOM4
            </form>
             <p class="card-name"> Adults 18+</p>
       <select style={{width:"50px"}} disabled={enable}> 1 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          
       </select>
       <form  class="">     
           <p class="card-name"> Children(0-17)</p>
        </form>
       <select style={{width:"50px"}} disabled={enable}> 0    
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>

       </select>
      </div>

    <form style={{paddingTop:"25px"}} >
    <input type="button" value="submit"/>
    </form>
</div>


    )
}
export default App;

