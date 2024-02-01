import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
      logOut().then(() => {

      }).catch(err => console.log(err))
  }
    const navMenus = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/menu'}>Our Menu</Link></li>
    <li><Link to={'/order/offered'}>Our Shop</Link></li>
    <li><Link to={'Secret'}>Secret</Link></li>
      {
        user ? <>
        <li onClick={handleLogOut}><Link>{user?.displayName || 'LogOut'}</Link></li>
        </> : <>
        <li><Link to={'/login'}>Login</Link></li>
        </>
      }


    </>
  return (
    <nav>
      <div className="navbar fixed z-10  bg-slate-700 bg-opacity-25 text-white max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 font-bold rounded-box w-52 "
            >
                {navMenus}
              
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenus}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
