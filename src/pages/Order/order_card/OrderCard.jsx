import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const OrderCard = ({ item }) => {
  //! Order card
  const { name, image, price, recipe, _id } = item;
  //* Redirect or enforce user to login, if user logged in
  const location = useLocation();
  const navigate = useNavigate();
  // Use Axios
  const  axiosSecure  = useAxiosSecure();
// use Cart hook
const [, refetch] = useCart()
  const { user } = useAuth();
  // console.log(props.item);
  // console.log(name);
  // add to cart
  const handleAddToCart = () => {
    if (user && user.email) {
      //TODO: send data to db
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/api/v1/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          // console.log(res);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been added to cart`,
            showConfirmButton: false,
            timer: 2000,
          });
          // Refetch the cart to update
              refetch();
        }
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your food has been added to cart",
        showConfirmButton: false,
        timer: 2000,
      });

    } else {
      Swal.fire({
        title: "Do you have an account?",
        text: "You won't be able to do this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <section>
      <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px]" src={image} alt="Foods" />
        </figure>
        {price && (
          <p className="absolute right-5 top-5 bg-[#BB8506] text-white p-1 rounded-md font-bold">
            {price} $
          </p>
        )}
        <div className="card-body">
          <h2 className="font-bold text-2xl text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={ handleAddToCart}
              className="btn btn-outline uppercase  border-0 border-b-4 text-[#BB8506] hover:text-[#BB8506]"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderCard;
