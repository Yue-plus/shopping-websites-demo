import React, {Component} from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form style={{maxWidth: '800px', margin: '0 auto'}}>
        <h3>注册</h3>

        <div className="mb-3">
          <label>姓</label>
          <input
            type="text"
            className="form-control"
            placeholder="姓"
          />
        </div>

        <div className="mb-3">
          <label>名</label>
          <input type="text" className="form-control" placeholder="名"/>
        </div>

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
            注册
          </button>
        </div>
        <p className="forgot-password text-right">
          已有账号？ <a href="/sign-in">点击登入</a>
        </p>
      </form>
    )
  }
}