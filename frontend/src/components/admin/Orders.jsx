import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiArmoredBoomerang } from "react-icons/gi";

const Orders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tables">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#ggfhfgfhjghk</td>
                <td>Processing</td>
                <td>5</td>
                <td>₹ {500}</td>
                <td>COD</td>
                <td>Abhijit</td>
                <td>
                  <Link to={`/order/${"fasf"}`}>
                    <AiOutlineEye />
                  </Link>

                  <button>
                    <GiArmoredBoomerang />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orders;
