import Component2 from "./Component2";
import { useState } from 'react';
function Component1() {
    const [user, setUser] = useState("hello raju");
    return (
        <div>
            <h3>Hello from Component1</h3>
            {user}<br></br>
            <label>update user:</label>
            <input type="text" value={user} onChange={e => setUser(e.target.value)} />
            <Component2 user={user} />
        </div>
    )
}
export default Component1;