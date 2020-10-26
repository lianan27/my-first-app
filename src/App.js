import React, { Component } from 'react';
import './App.css';
import { Menu, Pagination, Popover, Button, Carousel } from 'antd';
import './popover.css';

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
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail">首页</Menu.Item>
            <SubMenu key="find" title="发现" className="items">
              <Menu.ItemGroup title="平面"></Menu.ItemGroup>
              <Menu.ItemGroup title="UI"></Menu.ItemGroup>
              <Menu.ItemGroup title="插画"></Menu.ItemGroup>
              <Menu.ItemGroup title="动漫"></Menu.ItemGroup>
              <Menu.ItemGroup title="摄影"></Menu.ItemGroup>
              <Menu.ItemGroup title="空间"></Menu.ItemGroup>
              <Menu.ItemGroup title="精选作品"></Menu.ItemGroup>
              <Menu.ItemGroup title="精选文章"></Menu.ItemGroup>
              <Menu.ItemGroup title="精选表格"></Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="job" title="职位">
              <Menu.ItemGroup title="职位"></Menu.ItemGroup>
              <Menu.ItemGroup title="公司"></Menu.ItemGroup>
              <Menu.ItemGroup title="+发布职位"></Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="action" title="活动">
              <Menu.ItemGroup title="设计大赛"></Menu.ItemGroup>
              <Menu.ItemGroup title="专题策划"></Menu.ItemGroup>
              <Menu.ItemGroup title="线上活动"></Menu.ItemGroup>
              <Menu.ItemGroup title="线下活动"></Menu.ItemGroup>
              <Menu.ItemGroup title="学习音频"></Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="front" title="正版素材">
              <Menu.ItemGroup title="图片"></Menu.ItemGroup>
              <Menu.ItemGroup title="视频"></Menu.ItemGroup>
              <Menu.ItemGroup title="字体"></Menu.ItemGroup>
              <Menu.ItemGroup title="音乐"></Menu.ItemGroup>
              <Menu.ItemGroup title="创意专题"></Menu.ItemGroup>
              <Menu.ItemGroup title="我要供图"></Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="class" title="课程">
              <Menu.ItemGroup title="会员专区"></Menu.ItemGroup>
              <Menu.ItemGroup title="免费直播"></Menu.ItemGroup>
              <Menu.ItemGroup title="正在热销"></Menu.ItemGroup>
              <Menu.ItemGroup title="口碑好课"></Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="protect" title="版权保护">
              <Menu.ItemGroup title="著作权登记"></Menu.ItemGroup>
              <Menu.ItemGroup title="区块链存证"></Menu.ItemGroup>
              <Menu.ItemGroup title="维权服务"></Menu.ItemGroup>
              <Menu.ItemGroup title="商标注册"></Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="omit" title="•••">
              <Menu.ItemGroup title="设计师"></Menu.ItemGroup>
              <Menu.ItemGroup title="榜单"></Menu.ItemGroup>
              <Menu.ItemGroup title="站酷APP"></Menu.ItemGroup>
              <Menu.ItemGroup title="站酷字库"></Menu.ItemGroup>
            </SubMenu>
          </Menu>
          <div className="glass">
            <img src={[require("./img/站酷_logo_05.gif")]} alt="" />
          </div>
          <div className="glass">
            <img src={[require("./img/站酷_logo_07.gif")]} alt="" />
          </div>

          <div className="login">登录&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;注册</div>
        </div>

        {/* 图片轮播 && 导航内容显示 */}
        <div className="content">
          <Carousel autoplay>
            <div>
              <h3><img src={require("./img/slideshow1.png")} alt="" />1</h3>
            </div>
            <div>
              <h3><img src={require("./img/slideshow2.png")} alt="" />2</h3>
            </div>
            <div>
              <h3><img src={require("./img/slideshow3.png")} alt="" />3</h3>
            </div>
            <div>
              <h3><img src={require("./img/slideshow4.jpg")} alt="" />4</h3>
            </div>
            <div>
              <h3><img src={require("./img/slideshow5.png")} alt="" />5</h3>
            </div>
            <div>
              <h3><img src={require("./img/slideshow6.png")} alt="" />6</h3>
            </div>
          </Carousel>
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

          {/* 商标展示 */}
          <div className="footer">
            <div className="footer-top">
              <p>移动版</p>
              <p>关于我们</p>
              <p>用户协议</p>
              <p>隐私政策</p>
              <p>侵权申诉</p>
              <p>企业服务</p>
              <p>帮助中心</p>
              <p>联系我们</p>
              <p>中文</p>
              <p>English</p>
            </div>
            <div className="footer-bottom">
              <p>
                京公网安备11010502000501号&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 广播电视节目制作经营许可证（京）字第06990号
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;京ICP备11017824号&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;京ICP证130164号
            </p>
            <p>
            营业执照&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;网上有害信息举报专区&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            不良信息举报电话：010-56538658&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;举报邮箱 jubao@zcool.com.cn&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            联系电话：010-56538600
            </p>
            </div>
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


