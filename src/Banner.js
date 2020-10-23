import React from 'react';
import './App.css';
import Carousel from 'nuka-carousel';


export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        // react定义数据
        this.state = {

        }
    }
    render() {

        return (
            <Carousel autoplay>
                <img src={require('./img/slideshow1.png')} alt="logo" />
                <img src={require('./img/slideshow2.png')} alt="logo" />
                <img src={require('./img/slideshow3.png')} alt="logo" />
                <img src={require('./img/slideshow4.jpg')} alt="logo" />
                <img src={require('./img/slideshow5.png')} alt="logo" />
                <img src={require('./img/slideshow6.png')} alt="logo" />
            </Carousel>
        )
    }
}

