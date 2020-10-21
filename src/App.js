import React, { Component } from 'react';
import './App.css';
import { Menu } from 'antd';
import Banner from './Banner.js';

const { SubMenu } = Menu;
const numbers = [{ url: './img/item5.jpg', title: '现代北欧家装合集', type: '空间-室内设计', eye: 8631, number: 101, praise: 274 },
{ url: './img/item6.jpg', title: 'THE FOUR SYMBOLS ④ 四象', type: '插画-插画习作', eye: '1.5w', number: 139, praise: 1155 },
{ url: './img/item7.jpg', title: 'THE FOUR SYMBOLS ④ 四象', type: '插画-插画习作', eye: '1.5w', number: 139, praise: 1155 },
{ url: './img/item8.jpg', title: 'THE FOUR SYMBOLS ④ 四象', type: '插画-插画习作', eye: '1.5w', number: 139, praise: 1155 },
{ url: './img/item9.jpg', title: 'THE FOUR SYMBOLS ④ 四象', type: '插画-插画习作', eye: '1.5w', number: 139, praise: 1155 }];
const list = [1, 2, 3, 4, 5];
export default class App extends Component {

  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
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
        <div className="details">
          <div className="matter">
            {
              list.map((list) =>
                <div className="box">
                  {
                    numbers.map((url,title) =>
                      <div className="item">
                        <img src={[require("./img/item1.jpg")]} alt="" />
                        <div className="text">
                          <p className="title">{numbers.title}</p>
                          <p className="type">{numbers.type}</p>
                          <div className="icon">
                            <p className="eye">{numbers.eye}</p>
                            <p className="number">{numbers.number}</p>
                            <p className="praise">{numbers.praise}</p>
                          </div>
                        </div>
                        <div className="card-item">
                          <span className="left">
                            <a href="https://saurydesign.zcool.com.cn" title="秋刀鱼设计" className="link">
                              <img src={[require("./img/item1.jpg")]} alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                        秋刀鱼设计</a>
                          </span>
                          <span className="right">
                            1天前
                      </span>
                        </div>
                      </div>
                    )
                  }

                </div>)
            }

          </div>
        </div>
      </>
    );
  }
}

// 职位：职位 公司 发布职位
// 活动：设计大赛 专题策划 线上活动 线下活动 学习音频
// 正版素材：图片 视频 字体 音乐 创意专题 我要供图
// 课程 ：免费直播 学习路径 正在热销 口碑好课
// 版权保护: 著作权登记 区块链存证 维权服务 商标注册


