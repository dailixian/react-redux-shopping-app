import React, { Component } from "react";
import { withAuthentication } from "../hoc/withAuthentication";

export class OrderHistory extends Component {
  render() {
    return <div>OrderHistory</div>;
  }
}

export default withAuthentication(OrderHistory);
