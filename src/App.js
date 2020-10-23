import React, { Component } from 'react';
import './App.css';
import { Menu, Pagination, Popover, Button } from 'antd';
import Banner from './Banner.js';
import './popover.css'

const { SubMenu } = Menu;
const numbers = [{ url: 'item5.jpg', title: '现代北欧家装合集', type: '空间-室内设计', eye: 8631, number: 101, praise: 274, link: '阿文精英', right: '22小时前', left: 'item10.jpg' },
{ url: 'item6.jpg', title: 'THE FOUR SYMBOLS ④ 四象', type: '插画-插画习作', eye: '1.5w', number: 139, praise: 1155, link: 'YOUNGIKE', right: '21小时前', left: 'item11.jpg' },
{ url: 'item7.jpg', title: '品牌IP升级—太空APU', type: '平面-吉祥物', eye: '7838', number: 24, praise: 326, link: '一万同学', right: '1天前', left: 'item12.jpg' },
{ url: 'item8.jpg', title: '星期米荣获2020 Pentawards包装设计大奖', type: '平面-包装', eye: '4581', number: 30, praise: 362, link: '柏星龙', right: '1天前', left: 'item13.jpg' },
{ url: 'item9.jpg', title: '【创意周报】十月 - 第三周', type: '特别企划', link: '站酷海洛', right: '推广', left: 'item14.jpg' }];
const list = [1, 2, 3, 4, 5];
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  link() {
    this.props.history.push("https://www.zcool.com.cn/work/ZNDgzMjM0ODQ=.html")
  }

  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;

    const Content = (
      <div className="show">
        {/* 作者信息部分 */}
        <div className="top">
          <div className="autor">
            <img src={[require('./img/item5.jpg')]} alt=""></img>
            <p>
              <span>阿文精英</span>
              <span>杭州 &nbsp; | &nbsp; 摄影师</span>
            </p>
          </div>
          <Button>关注</Button>
        </div>

        {/* 作品展示部分 */}
        <div className="middle">
          <img src={[require('./img/item6.jpg')]} alt=""></img>
          <img src={[require('./img/item7.jpg')]} alt=""></img>
          <img src={[require('./img/item8.jpg')]} alt=""></img>
        </div>

        {/* 热度信息部分 */}
        <div className="base">
          <img src={[require("./img/hot.png")]} alt=""></img>
          <span>123</span>
          <img src={[require("./img/pic.png")]} alt=""></img>
          <span>456</span>
          <img src={[require("./img/中间人.png")]} alt=""></img>
          <span>789</span>
        </div>
      </div>
    )
    return (
      <div>
        {/* 导航栏 */}
        <div className="header">
          <img src={[require("./img/站酷_logo.gif")]} alt="" className="logo" />
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="menu">
            <Menu.Item className="name" key="mail">首页</Menu.Item>
            <Menu.Item className="name">发现</Menu.Item>
            <SubMenu className="name" key="mail" title="职位">
            </SubMenu>
            <SubMenu className="name" key="SubMenu" title="活动">
            </SubMenu>
            <Menu.Item className="name">正版素材</Menu.Item>
            <Menu.Item className="name">课程</Menu.Item>
            <Menu.Item className="name">版权保护</Menu.Item>
            <SubMenu key="SubMenu" className="name" title="•••">
              <Menu.ItemGroup title="设计师"></Menu.ItemGroup>
              <Menu.ItemGroup title="榜单"></Menu.ItemGroup>
              <Menu.ItemGroup title="APP"></Menu.ItemGroup>
              <Menu.ItemGroup title="字库"></Menu.ItemGroup>
            </SubMenu>
            <div className="picture">
              <img src={[require("./img/站酷_logo_05.gif")]} alt="" className="glass" />
            </div>
            <div className="picture">
              <img src={[require("./img/站酷_logo_07.gif")]} alt="" className="glass" style={{ marginLeft: "0px" }} />
            </div>
          </Menu>
          <div className="login">登录 | 注册</div>
        </div>

        {/* 图片轮播 && 导航内容显示 */}
        <div className="content">
          <Banner />
          <div className="photo">
            <img src={[require("./img/content1.jpg")]} alt="" onClick={() => { window.location.href = "https://www.zcool.com.cn" }} />
            <img src={[require("./img/content2.jpg")]} alt="" onClick={() => { window.location.href = "https://www.zcool.com.cn" }} />
            <img src={[require("./img/content3.jpg")]} alt="" onClick={() => { window.location.href = "https://www.zcool.com.cn" }} />
            <img src={[require("./img/content4.jpg")]} alt="" onClick={() => { window.location.href = "https://www.zcool.com.cn" }} />
            <img src={[require("./img/content5.jpg")]} alt="" onClick={() => { window.location.href = "https://www.zcool.com.cn" }} />
          </div>
          <div className="nav">
            <p>首页推荐</p>
            <p>最新发布</p>
          </div>
        </div>

        {/* 细节展示 */}
        <div className="details">
          <div className="matter">
            {
              list && list.length > 0 && list.map((list) =>
                <div className="box">
                  {
                    numbers.map((number, index) =>
                      <div className="item">
                        <img src={[require("./img/" + number.url)]}
                          alt="" key={index}
                          style={{ cursor: 'pointer' }}
                          onClick={this.link.bind(this)} />
                        <div className="text">
                          <p className="title" key={index}>{number.title}</p>
                          <p className="type" key={index}>{number.type}</p>
                          <div className="icon">
                            <p className="eye" key={index}>{number.eye}</p>
                            <p className="number" key={index}>{number.number}</p>
                            <p className="praise" key={index}>{number.praise}</p>
                          </div>
                        </div>
                        <div className="card-item">
                          <Popover
                            content={Content}
                            trigger="hover"
                            className="left"
                            placement="topLeft"
                          >
                            <a href="https://saurydesign.zcool.com.cn" title="秋刀鱼设计" className="link" key={index}>
                              <img key="index" src={[require("./img/" + number.left)]} alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                              {number.link}</a>
                          </Popover>
                          <span className="right" key="index">
                            {number.right}
                          </span>
                        </div>
                      </div>
                    )
                  }
                </div>)
            }
            <Pagination
              defaultCurrent={1}
              defaultPageSize={50}
              onChange={this.handleChange}
              total={list.length} />
          </div>
        </div>
      </div>
    );
  }
}

// 职位：职位 公司 发布职位
// 活动：设计大赛 专题策划 线上活动 线下活动 学习音频
// 正版素材：图片 视频 字体 音乐 创意专题 我要供图
// 课程 ：免费直播 学习路径 正在热销 口碑好课
// 版权保护: 著作权登记 区块链存证 维权服务 商标注册


