import { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
export default class Layout extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Sidebar></Sidebar>
            </div>
            <div className="col-9">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </>
    );
  }
}
