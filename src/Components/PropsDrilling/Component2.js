import Component3 from "./Component3";
function Component2({user}){
    return(
        <div>
            <h3>Hello from Component2</h3>
            {user}
            <Component3 user={user} />

        </div>
    )
}
export default Component2;