import React, { Component } from "react";
import Client from "../Client";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      account: { Picture: "" },
      picture: "",
    };
  }

  componentDidMount() {
    let userName = this.props.match.params.userName;
    if (userName !== undefined) {
      Client.getAccountByUserName(userName, (res) => res.clone().json()).then(
        (res) => {
          console.log(res);

          this.setState({ userName: userName, account: res });
        }
      );
    }
  }

  render() {
    console.log("render begin");
    console.log(this.state);
    console.log(this.state.account);
    return (
      <div>
        <div>{this.state.userName}</div>
        <div>
          <img src={this.state.account.Picture} alt=""></img>
        </div>
      </div>
    );
  }
}

export default User;
