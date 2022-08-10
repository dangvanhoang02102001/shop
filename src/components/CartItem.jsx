import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, qty, total, price, image, id } = props.item;
  const handleMinusItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const handleAddItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <div className="px-4 my-5 bg-light rounded-3">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={image} alt={title} height="200px" width="180px" />
          </div>
          <div className="col-md-4">
            <h3>
              {title}(${price.toFixed(2)}/item)
            </h3>
            <div className="fw-bolder py-3" id="actions">
              Quantity:
              <button
                onClick={handleMinusItem}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #ccc",
                  margin: "0 0.5rem",
                  padding: "0.15rem 1rem",
                  color: "#000",
                }}
              >
                -
              </button>
              {qty}
              <button
                onClick={handleAddItem}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #ccc",
                  margin: "0 0.5rem",
                  padding: "0.15rem 1rem",
                  color: "#000",
                }}
              >
                +
              </button>
            </div>
            <div className="lead fw-bold">
              Total: ${total.toFixed(2)}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
