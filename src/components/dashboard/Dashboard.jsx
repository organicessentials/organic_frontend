import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch()

  const logoutUser =()=> {
    dispatch(logout())
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  
  return (
    <div className="table">
      <h2>My account</h2>
      <table>
        <tr>
          <td>
            <Link to="/my-account">Dashboard</Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to="/my-account/orders/">Orders</Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to="/my-account/downloads/">Downloads</Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to="/my-account/edit-address">Addresses</Link>
          </td>
        </tr>
        {/* <tr>
          <td>
            <Link to="/my-account/add-payment-method">Payment Methods</Link>
          </td>
        </tr> */}
        <tr>
          <td>
            <Link to="/my-account/edit-account/">Account details</Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link onClick={logoutUser}>Logout</Link>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Dashboard;
