import React, {useState} from "react"

const Prueba =(props)=>{
    const [enable, updateEnable] = useState(true)
    if (enable){
        return (
         <div>
            <ul>
                {props.items.map((marca)=><li>{marca}</li>)}
            </ul>
            <button onClick={()=> updateEnable(false)}>deshabilitar</button>
        </div>
        )
    }else{
        return  <button onClick={()=> updateEnable(true)}>habilitar</button>
    }
    
}
export default Prueba