import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                    alt="prince"
                    name="Man_the_prince"/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post_name">
                    Lake of my dream
                </div>
                <div className="post_descr">
                    I found a beautiful place to rest!
                </div>
            </div>
        )
    } 
}