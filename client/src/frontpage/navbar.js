import { user, logo } from "./images"
import { useEffect, useState, useContext } from "react";

export function Navbar() {
    // const { email, handleEmailChange } = useContext(EmailContext)
    const [show_user_bar, setIsShown] = useState(" hidden")

    let handleLogout = () => {
        fetch(process.env.REACT_APP_ROOTURL + "/logout", { method: "GET" })
        window.location.replace(process.env.REACT_APP_ROOTURL)
        //   handleEmailChange("")
    }

    return (
        <nav id="welcome" className="text-xl grid grid-cols-2 grid-rows-1 bg-white px-14">
            <div>
                <a className="text-left" href="/"><img className="inline mx-2 h-12 w-12" src={logo} />BeBetter</a>
            </div>
            
            <nav className="place-self-end" onMouseEnter={() => setIsShown("")}
                onMouseLeave={() => setIsShown(" hidden")}>

                <button>
                    <img className="h-9 w-9" src={user} />
                </button>

                <div className={"absolute border rounded-lg bg-white" + show_user_bar}>
                    <button onClick={handleLogout} className="px-1">Log out</button>
                </div>

            </nav>
        </nav>
    )
}