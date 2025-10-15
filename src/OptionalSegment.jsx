

import { Link } from "react-router-dom"


function OptionalFunc(){
    const userData=[
        {id:1, name:"waleed"},
        {id:2, name:"ali"},
        {id:3, name:"azam"},
        {id:4, name:"hamza"},
        {id:5, name:"wahaj"},
    ]
    return(
        <div>
            <div>
                <h1>user</h1>
            {
                userData.map((item)=>(
                    <Link to={"/dynamic/"+item.id} className="flex flex-col">{item.name}</Link>
                ))
            }
            </div>
             <div>
                <h1>user</h1>
            {
                userData.map((item)=>(
                    <Link to={"/dynamic/"+item.id+item.name} className="flex flex-col">{item.name}</Link>
                ))
            }
            </div>
        </div>
    )
}

export default OptionalFunc