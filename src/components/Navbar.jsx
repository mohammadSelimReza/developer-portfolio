import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
const [active ,setActive] = useState("");
    const [toggle,setToggle] = useState(false);
    return (
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 ">
            <Link to='/' onClick={()=>{
                setActive("");
                window.scrollTo(0,0);
            }} >
            <h1>
                Reza .
            </h1>
            </Link>
            <ul className="list-none hidden sm:flex flex-row gap-10">
                {
                    navLinks.map((nav)=>(
                        <li key={`${nav.id}`} className={`${
                            active === nav.title
                            ? "text-primary"
                            :
                            "text-secondary"
                        }
                        hover:text-white text-[18px] font-medium cursor-pointer
                        ` }
                        onClick={()=>setActive(nav.title)} >
                            <a href={`#${nav.id}`}> <h5>{nav.title}</h5> </a>
                        </li>
                    ))
                }
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={ toggle ? close : menu} alt="menu"  className="w-[28px] h-[28px] object-contain cursor-pointer " onClick={()=>setToggle(!toggle)} />
                <div className={`${!toggle ? 'hidden':"flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                    {
                        navLinks.map((nav)=>(
                            <li key={`${nav.id}`} className={`${
                                active === nav.title
                                ? "text-primary"
                                :
                                "text-secondary"
                            }
                            hover:text-white text-[18px] font-medium cursor-pointer
                            ` }
                            onClick={()=>{
                                setActive(nav.title);
                                setToggle(false);
                            }} >
                                <a href={`#${nav.id}`}> <h5>{nav.title}</h5> </a>
                            </li>
                        ))
                    }
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
