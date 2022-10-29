import {Button, Carousel, Col, Row} from "react-bootstrap";

function Info() {
  return (
    <Row>
      <Col lg={6}>
        <Carousel variant='dark'>
          <Carousel.Item>
            <img className='d-block w-100' src='/img/Info/1.png' alt='全部颜色'/>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='/img/Info/2.png' alt='镜瓷白'/>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='/img/Info/3.png' alt='子夜黑'/>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='/img/Info/4.png' alt='时光蓝'/>
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col lg={6} style={{padding: '12px'}}>
        <h2>Redmi Note 12 5G</h2>
        <p>三星 OLED 护眼屏｜骁龙 5G 芯｜5000mAh 电量</p>
        <div style={{
          width: '60%',
          height: '80px',
          color: 'white',
          backgroundColor: 'orange',
          lineHeight: '80px',
          fontSize: '38px',
          textAlign: 'center',
          margin: '12px 0',
        }}>1299 元</div>
        <div>
          <h3>选择颜色：</h3>
          <Row lg={4}>
            <Button style={{margin: 'px'}} variant='light'>镜瓷白</Button>
            <Button style={{margin: 'px'}} variant='dark'>子夜黑</Button>
            <Button style={{margin: 'px'}} variant='primary'>时光蓝</Button>
          </Row>
          <a href='https://www.mi.com/shop/buy/detail?product_id=16642' style={{
            height: '80px',
            lineHeight: '80px',
            color: 'white',
            backgroundColor: 'orange',
            display: 'inline-block',
            fontSize: '38px',
            textAlign: 'center',
            textDecoration: 'none',
            padding: '0 24px',
            margin: '12px 24px',
          }}>立即购买</a>
        </div>
      </Col>
    </Row>
  )
}

export default Info