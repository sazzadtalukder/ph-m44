import { useState } from "react";
import Link from "../Link/Link";

import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "FAQ", path: "/faq" },
      ];
      
    return (
        <div>
            <div onClick={()=> setOpen(!open)} className="md:hidden bg-slate-400">
                {
                    open === true ?  <IoMdClose className="text-4xl"></IoMdClose> :  <IoMdMenu className="text-4xl"></IoMdMenu>
                }
                
                
            </div>
            
            
            
            <ul className={`md:flex absolute md:static bg-gray-300 ${open === true ? 'top-12' : '-top-60'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
            
        </div>
    );
};

export default Navbar;