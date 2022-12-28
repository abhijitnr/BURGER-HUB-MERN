import cheeseBurger from "../../assets/cheese-burger.jpg";
import vegCheeseBurger from "../../assets/veg-cheese-burger.jpg";
import burgerFry from "../../assets/burger-fry.jpg";

const CartItem = ({ value, title, image, increment, decrement }) => {
  return (
    <div className="cartitem">
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
      </main>
    </section>
  );
};

export default Cart;
