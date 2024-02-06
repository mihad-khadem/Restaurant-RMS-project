import useCart from "../../hooks/useCart";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  // Cart Hook
  const [cart, refetch] = useCart();
  // Axios
  const axiosSecure = useAxiosSecure();

  //Total Price from cart Hook
  const totalPrice = cart?.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  // Delete from cart
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/v1/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your food has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <section>
      <div>
        <SectionTitle
          heading={"Wanna add more ?"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div className="">
        <div className="flex justify-center items-center gap-20 text-2xl font-semibold pb-2">
          <h2>Total Items : 0 {cart?.length}</h2>
          <h2>Total Price : {totalPrice} $</h2>
          <button className="btn btn-neutral">Pay</button>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-orange-400 text-white rounded">
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} />
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </td>
                    {/* Name */}
                    <td>
                      <div className="font-bold">{item.name}</div>
                    </td>
                    <td>
                      {/* Price */}
                      <h2>{item.price} $</h2>
                    </td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn  btn-xl"
                      >
                        <FaTrash className="text-red-500"></FaTrash>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
