"use client";

// Library Import
import { useDispatch } from "react-redux";

// File Import
import { useAppSelector } from "@/store/store";
import {
  addToCart,
  decreaseFromCart,
  deleteFromCart,
} from "@/store/features/productSlice";

const Carts: React.FC = () => {
  const carts = useAppSelector((state) => state.productReducer.value.carts);
  const dispatch = useDispatch();

  const grandTotal = carts.reduce((total, cartItem) => {
    const itemTotalPrice =
      typeof cartItem.totalPrice === "string"
        ? parseFloat(cartItem.totalPrice)
        : cartItem.totalPrice;

    if (typeof itemTotalPrice === "number" && !isNaN(itemTotalPrice)) {
      return total + itemTotalPrice;
    }

    return total;
  }, 0) as number;

  return (
    <div className="page_wrapper">
      {/* Main Block */}
      <main className="py-5">
        <div className="container mt-8">
          <div className="section_heading">
            <h3>Product Cart</h3>
          </div>

          {carts?.length ? (
            <table className="table">
              <thead>
                <tr>
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {carts?.map((product, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{product?.name}</td>
                    <td className="px-4 py-2">${product?.price}</td>
                    <td className="px-4 py-2">
                      <form action="#" method="post" className="quantity">
                        <input
                          onClick={() =>
                            dispatch(decreaseFromCart(product?.id))
                          }
                          type="button"
                          value="-"
                          className="decrease"
                        />
                        <input
                          type="number"
                          value={product?.quantity}
                          name="qty"
                          className="quantity"
                        />

                        <input
                          type="button"
                          value="+"
                          onClick={(e) => {
                            dispatch(addToCart(product?.id));
                          }}
                          className="increase"
                        />
                      </form>
                    </td>

                    <td className="px-4 py-2">${product?.totalPrice}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => dispatch(deleteFromCart(product?.id))}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2 font-weight-bold">
                    <strong>Total:</strong> ${grandTotal?.toFixed(2)}
                  </td>
                  <td className="px-4 py-2"></td>
                </tr>
              </tfoot>
            </table>
          ) : (
            <div className="empty_text">Currently, you have no product</div>
          )}
          <div className="mt-4">
            <button className="custom_btn">Checkout</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carts;
