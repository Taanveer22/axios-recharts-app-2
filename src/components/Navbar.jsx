import Link from "./Link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "home" },
    { id: 2, path: "/about", name: "about" },
    { id: 3, path: "/service", name: "service" },
    { id: 4, path: "/contact", name: "contact" },
    { id: 5, path: "/*", name: "notfound" },
  ];
  return (
    <div className="bg-yellow-300 p-5">
      <div onClick={() => setOpen(!open)} className="sm:hidden text-2xl">
        {/* {open === true ? "open" : "close"} */}
        {open === true ? <FaWindowClose /> : <AiOutlineMenu />}
      </div>
      <ul
        className={`w-11/12 mx-auto list-none sm:flex justify-evenly items-center gap-10 bg-yellow-300 duration-1000 absolute sm:static ${
          open ? "top-32" : "-top-60"
        } `}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
