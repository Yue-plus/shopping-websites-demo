import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const navLinkCss = {
  color: 'gray',
  textDecoration: 'none',
  padding: '0 10px',
}

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">悦购</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink style={navLinkCss} to={`/`} >商品目录</NavLink>
          <NavLink style={navLinkCss} to={`/info`}>商品详情</NavLink>
          {/*<Nav.Link href="/car">购物车</Nav.Link>*/}
          {/*<Nav.Link href="/pay">付款界面</Nav.Link>*/}
          <NavLink style={navLinkCss} to={`/SignUp`}>注册</NavLink>
          <NavLink style={navLinkCss} to={`/SignIn`}>登入</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar