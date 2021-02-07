import React from "react";
import { orders } from "../reducers";

function TransactionRow() {
  return ( 
    <tr>
      <td>{orders.id}</td>
      <td>{orders.orderDate}</td>
      <td>{orders.orderTime}</td>
      <td>{orders.amount}</td>
    </tr>
  );
}

export default TransactionRow;
