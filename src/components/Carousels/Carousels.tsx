import {Carousel} from 'react-bootstrap';

import style from './Carousels.module.scss'

/**
 * 轮播图内容类型
 */
interface CarouselCaptionContent {
  href: string,
  img: string,
  title: string,
  describe: string,
}

/**
 * 轮播图内容
 */
const contents: Array<CarouselCaptionContent> = [
  {
    href: 'https://www.mi.com/shop/buy?product_id=10050020',
    img: '/img/Carousels/1.jpg',
    title: 'Redmi Note 12',
    describe: '【Note 12 5G】三星 OLED 护眼屏｜骁龙 5G 芯｜5000mAh 电量'
  }, {
    href: 'https://www.mi.com/a/h/26070.html?sign=581f93c0740168323bf45c4c5ca3b426',
    img: '/img/Carousels/2.webp',
    title: '小米11.11',
    describe: '科技焕新季'
  }, {
    href: 'https://www.mi.com/shop/buy?product_id=16620',
    img: '/img/Carousels/3.webp',
    title: 'Redmi Pad',
    describe: '入门平板，三大升级｜屏幕升级:90Hz高刷护眼屏｜外观升级:全金属一体化机身｜系统升级:MIUI Pad大屏定制系统'
  }, {
    href: 'https://www.mi.com/shop/buy?product_id=16686',
    img: '/img/Carousels/4.webp',
    title: '米家石墨烯踢脚线电暖器',
    describe: '加湿+火焰效果 | 悬浮外观 | 双核石墨烯速热 | 智能变频恒温'
  }, {
    href: 'https://www.mi.com/redmitv/x86',
    img: '/img/Carousels/5.webp',
    title: 'Redmi 智能电视 X86 86英寸',
    describe: '4K超高清大屏 | MEMC动态补偿 | 远场语音'
  },
]

/**
 * 单张轮播图
 *
 * @param href 转跳链接
 * @param img 图片路径
 * @param title 标题
 * @param describe 描述
 * @constructor
 */
function CarouselItem({href, img, title, describe}: CarouselCaptionContent) {
  return (
    <Carousel.Item>
      <a target='_blank' rel="noreferrer" href={href}>
        <img className="d-block w-100" src={img} alt={title}/>
      </a>
      <Carousel.Caption className={style.Caption}>
        <h3>{title}</h3>
        <p>{describe}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )
}

function Carousels() {
  return (
    <Carousel className={style.Carousel} variant='dark'>
      {contents.map((value: CarouselCaptionContent) => CarouselItem(value))}
    </Carousel>
  )
}

export default Carousels