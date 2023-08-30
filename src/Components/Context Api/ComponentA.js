import { useContext, useState } from "react";
import { store } from "./store";
function ComponentA() {
    const [name, setName] = useContext(store);
    return (
        <div>
            <h3>Hello from ComponentA   {name}</h3>
        </div>
    )

}
export default ComponentA;