import { useContext } from "react";
import { store } from "./store";

function ComponentB(){
    const[name,setName] = useContext(store)
    return(
        <div>
            <h3>Hello from ComponentB  {name}</h3>
           
        </div>
    )
}
export default ComponentB;