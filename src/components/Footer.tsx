import {Container} from "react-bootstrap";

function Footer() {
  return (
    <footer style={{backgroundColor: 'black', textAlign: 'center', position: 'fixed', right: 0, left: 0, bottom: 0}}>
      <Container>
        <a
          target='_blank'
          rel="noreferrer"
          href="https://beian.miit.gov.cn/"
          style={{color: 'white', textDecoration: 'none'}}
        >
          赣ICP备19008355号
        </a>
      </Container>
    </footer>
  )
}

export default Footer