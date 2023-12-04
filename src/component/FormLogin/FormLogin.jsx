import React, { Component } from "react";

export default class FormLogin extends Component {
    state = {
        username: 'Quyên',
        password: '123'
    };
    handleChangeForm(e){
        console.log(e.target.user)
    }
  render() {
    return (
      <div className="w-96">
        <form action="">
          <input  onChange={this.handleChangeForm} type={this.state.username} className="form-control" placeholder="use name"/>
          <input onChange={this.handleChangeForm} type={this.state.password} className="form-control" placeholder="pass word"/>
        </form>
      </div>
    );
  }
}
