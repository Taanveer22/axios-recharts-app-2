import Link from "./Link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "home" },
    { id: 2, path: "/about", name: "about" },
    { id: 1, path: "/service", name: "service" },
    { id: 1, path: "/contact", name: "contact" },
    { id: 1, path: "/*", name: "notfound" },
  ];
  return (
    <div className="w-11/12 mx-auto">
      <div onClick={() => setOpen(!open)} className="sm:hidden text-2xl">
        {/* {open === true ? "open" : "close"} */}
        {open === true ? <FaWindowClose /> : <AiOutlineMenu />}
      </div>
      <ul className="list-none sm:flex justify-evenly items-center gap-10">
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
