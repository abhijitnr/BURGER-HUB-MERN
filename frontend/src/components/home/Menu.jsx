import MenuCard from "./MenuCard";
import cheeseBurger from "../../assets/cheese-burger.jpg";
import vegCheeseBurger from "../../assets/veg-cheese-burger.jpg";
import burgerFry from "../../assets/burger-fry.jpg";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={cheeseBurger}
          price={200}
          title={"Cheese Burger"}
          handler={addToCartHandler}
          delay={0.1}
        />

        <MenuCard
          itemNum={2}
          burgerSrc={vegCheeseBurger}
          price={350}
          title={"Veg Cheese Burger"}
          handler={addToCartHandler}
          delay={0.5}
        />

        <MenuCard
          itemNum={3}
          burgerSrc={burgerFry}
          price={500}
          title={"French Burger Fries"}
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
