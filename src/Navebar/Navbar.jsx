import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="shadow-lg">
            <div className="navbar bg-base-100 flex w-[95%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-gray-600">
      <NavLink className={({isActive})=> isActive && "text-blue-600"} to="/">Home</NavLink>
        <NavLink className={({isActive})=> isActive && "text-blue-600"} to="/blogs">Blogs</NavLink>
        <NavLink className={({isActive})=> isActive && "text-blue-600"} to="/bookmark">Bookmark</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl md:text-2xl text-cyan-500"><span className="text-purple-600">Byte</span>Blaze</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-9 font-semibold text-gray-600">
    
    <NavLink className={({isActive})=> isActive && "text-blue-600"} to="/">Home</NavLink>
        <NavLink className={({isActive})=> isActive && "text-blue-600"} to="/blogs">Blogs</NavLink>
        <NavLink className={({isActive})=> isActive && "text-blue-600"} to="/bookmark">Bookmark</NavLink>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;