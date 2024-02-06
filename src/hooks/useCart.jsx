import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

// //! TanStack Query

// const useCart = () => {
//   const axiosSecure = useAxiosSecure();
//   // User
//     const {user} = useAuth()
//   const userEmail = user?.email;

//   const { refetch, data: cart = [] } = useQuery({
//     queryKey: ["cart", userEmail],
//     queryFn: async () => {
//       if (userEmail) {
//         const res = await axiosSecure.get(`/api/v1/carts?email=${userEmail}`);
//         return res.data;
//       }
//     },
//   });
//   return [cart, refetch];
// };

// export default useCart;
const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const userEmail = user?.email;

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", userEmail],
    queryFn: async () => {
      if (userEmail) { // Check if userEmail is not null or undefined
        const res = await axiosSecure.get(`/api/v1/carts?email=${userEmail}`);
        return res.data;
      }
      // Return a default value if userEmail is null or undefined
      return [];
    },
  });

  return [cart, refetch];
};

export default useCart;
