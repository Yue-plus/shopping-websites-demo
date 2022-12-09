import React, {Component} from 'react'

export default class SignIn extends Component {
  render() {
    return (
      <form style={{maxWidth: '800px', margin: '0 auto'}}>
        <h3>登入</h3>

        <div className="mb-3">
          <label>E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="请输入 E-mail"
          />
        </div>

        <div className="mb-3">
          <label>密码</label>
          <input
            type="password"
            className="form-control"
            placeholder="请输入密码"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            登入
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-in">忘记密码了？</a>
        </p>
      </form>
    )
  }
}