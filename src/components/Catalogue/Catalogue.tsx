import {Container, Card, Row, Col, Image} from "react-bootstrap";

import styles from "./Carousels.module.scss";

interface Item {
  link: string,
  img: string,
  name: string,
  describe: string,
  price: string,
}

const items: Array<Item> = [{
  link: "https://www.mi.com/shop/buy?product_id=16642",
  img: "/img/Catalogue/1.webp",
  name: "Redmi Note 12 5G",
  describe: "三星 OLED 护眼屏｜骁龙 5G 芯｜5000mAh 电量",
  price: "1199元起",
}, {
  link: "https://www.mi.com/shop/buy?product_id=16644",
  img: "/img/Catalogue/2.webp",
  name: "Redmi Note 12 Pro",
  describe: "IMX766 防抖相机｜OLED 柔性直屏｜67W 闪充",
  price: "1699元起",
}, {
  link: "https://www.mi.com/shop/buy?product_id=16646",
  img: "/img/Catalogue/3.webp",
  name: "Redmi Note 12 Pro+",
  describe: "2亿超清防抖相机｜OLED 柔性直屏",
  price: "2199元起",
}, {
  link: "https://www.mi.com/redminote11",
  img: "/img/Catalogue/4.webp",
  name: "Redmi Note 11 5G",
  describe: "5000mAh大电量",
  price: "1199元起",
}, {
  link: "https://www.mi.com/redmik50",
  img: "/img/Catalogue/5.webp",
  name: "Redmi K50",
  describe: "2K直屏的狠旗舰",
  price: "2099元起",
}, {
  link: "https://www.mi.com/redminote11t-pro",
  img: "/img/Catalogue/6.webp",
  name: "Redmi Note 11T Pro",
  describe: "天玑8100｜真旗舰芯",
  price: "1569元起",
}, {
  link: "https://www.mi.com/mi12s-pro",
  img: "/img/Catalogue/7.webp",
  name: "Xiaomi 12S Pro",
  describe: "骁龙8+ 旗舰处理器 | 徕卡影像",
  price: "4399元起",
}, {
  link: "https://www.mi.com/shop/buy?product_id=16326",
  img: "/img/Catalogue/8.webp",
  name: "Redmi K50 至尊版",
  describe: "骁龙8+ ｜1.5K 高清直屏",
  price: "2699元起",
}];

function CommodityCard(item: Item) {
  return (
    <Col lg={3} sm={6}>
      <a target="_blank" rel="noreferrer" className={styles.a} href={item.link}>
        <Card className={styles.CommodityCard}>
          <Image className={styles.img} src={item.img}/>
          <h3 className={styles.name}>{item.name}</h3>
          <p className={styles.describe}>{item.describe}</p>
          <p className={styles.price}>{item.price}</p>
        </Card>
      </a>
    </Col>
  )
}

/**
 * 商品目录
 * @constructor
 */
function Catalogue() {
  return (
    <Container>
      <Row>
        {items.map((value: Item) => CommodityCard(value))}
      </Row>
    </Container>
  )
}

export default Catalogue