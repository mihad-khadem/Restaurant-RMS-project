import { FaCartFlatbed, FaCalendar, FaList, FaStar, FaMoneyCheckDollar, FaBowlFood } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const DashBoard = () => {
  return (
    <section>
      <div className="flex">
        <div className="w-[300px] min-h-screen bg-orange-400">
          <ul className="menu p-5">
            <li className="m-2">
              <NavLink className={'text-xl'} to={"/dashboard/user-home"}>
              <FaHome className=""/> User Home
              </NavLink>
            </li>
            <li className="m-2">
              <NavLink className={'text-xl'} to={"/dashboard/cart"}>
                <FaCartFlatbed></FaCartFlatbed> My Cart
              </NavLink>
            </li>
            <li className="m-2">
              <NavLink className={'text-xl'} to={"/dashboard/reservation"}>
                <FaCalendar></FaCalendar> My Reservation
              </NavLink>
            </li>
            <li className="m-2">
              <NavLink className={'text-xl'} to={"/dashboard/review"}>
                <FaStar/> Review
              </NavLink>
            </li>
            <li className="m-2">
              <NavLink className={'text-xl '} to={"/dashboard/reservation"}>
                <FaMoneyCheckDollar></FaMoneyCheckDollar> Payment
              </NavLink>
            </li>
            <div className="divider"></div>
            <li className="m-2">
              <NavLink className={'text-xl '} to={"/"}>
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li className="m-2">
              <NavLink className={'text-xl '} to={"/order/salad"}>
                <FaBowlFood></FaBowlFood> Order Food
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Dash board Contant */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
