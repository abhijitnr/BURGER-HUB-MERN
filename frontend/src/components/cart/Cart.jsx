import cheeseBurger from "../../assets/cheese-burger.jpg";
import vegCheeseBurger from "../../assets/veg-cheese-burger.jpg";
import burgerFry from "../../assets/burger-fry.jpg";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, image, increment, decrement }) => {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={image} alt={title} />
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          value={0}
          title={"Cheese Burger"}
          image={cheeseBurger}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />

        <CartItem
          value={0}
          title={"Veg Cheese Burger"}
          image={vegCheeseBurger}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />

        <CartItem
          value={0}
          title={"French Burger Fries"}
          image={burgerFry}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹ {2000}</p>
          </div>

          <div>
            <h4>Tax</h4>
            <p>₹ {2000 * 0.18}</p>
          </div>

          <div>
            <h4>Shipping Charges</h4>
            <p>₹ {80}</p>
          </div>

          <div>
            <h4>Total</h4>
            <p>₹ {2000 + 2000 * 0.18 + 80}</p>
          </div>

          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
