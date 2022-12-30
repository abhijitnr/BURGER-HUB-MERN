const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>

        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"Hojai, Assam"}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Abhijit Biswas"}
          </p>

          <p>
            <b>Phone</b>
            {66899696889}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>

          <p>
            <b>Placed At</b>
            {"31-12-2022"}
          </p>

          <p>
            <b>Delivered At</b>
            {"07-01-2023"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>

          <p>
            <b>Payment Reference</b>
            {"tgh4335hjv5n"}
          </p>

          <p>
            <b>Paid At</b>
            {"07-01-2023"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Totals</b>₹ {4566}
          </p>

          <p>
            <b>Shipping Charges</b>₹ {80}
          </p>

          <p>
            <b>Tax</b>₹ {200}
          </p>

          <p>
            <b>Total Amount</b>₹ {4566 + 80 + 200}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>

          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>

          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>

          <div>
            <h4>Cheese Burger Fries</h4>
            <div>
              <span>{10}</span> x <span>{800}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Totals
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹ {8888}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
