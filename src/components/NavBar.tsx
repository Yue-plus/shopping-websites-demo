import {Container, Nav, Navbar} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">悦购</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">商品目录</Nav.Link>
          <Nav.Link href="#features">商品详情</Nav.Link>
          <Nav.Link href="#pricing">购物车</Nav.Link>
          <Nav.Link href="#pricing">付款界面</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar