import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-gray-800 text-white">
      <main className=" flex items-center justify-between max-w-[1024px] mx-auto h-[70px]">
        <div className=" text-xl font-bold">Medium</div>
        <nav>
          <ul className=" flex gap-5">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about-us"}>About us</NavLink>
            </li>
            <li>
              <NavLink to={"/blogs"}>Blogs</NavLink>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Navbar;
