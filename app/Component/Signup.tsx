

export function Signup(){
    return (
        <div className="flex flex-col h-screen justify-center ">
            <div className="flex justify-center">
                <div>
                <input type="text" placeholder="Username" className="p-2 m-2"/>
                <br />
                <input type="text" placeholder="Password" className="p-2 m-2" />
                <br />
           <div className="flex justify-center">
            <button className=" bg bg-blue-300">Sign up</button>
           </div>
            
            </div>
        </div>
        </div>
    )
}