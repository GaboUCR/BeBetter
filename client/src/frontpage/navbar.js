import { user } from "./images"
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
        <nav id="welcome" className="text-xl p-4 grid grid-cols-3 grid-rows-1 items-center">
            <div className="">
                <a href="/">Mail</a>
            </div>

            <nav className="place-self-end" onMouseEnter={() => setIsShown("")}
                onMouseLeave={() => setIsShown(" hidden")}>

                <button className="px-6 py-2" >
                    <img src={user} />
                </button>

                <div className={"absolute border rounded-lg bg-white" + show_user_bar}>
                    <button onClick={handleLogout} className="px-2">Log out</button>
                </div>

            </nav>
        </nav>
    )
}