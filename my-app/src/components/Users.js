import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                    src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                    alt="prince"
                    name="Man_the_prince" />
            <div className="users__block">
                <User 
                        src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                        alt="prince"
                        name="Man_the_prince"
                        min />
                <User 
                        src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                        alt="prince"
                        name="Man_the_prince"
                        min />
                <User 
                        src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                        alt="prince"
                        name="Man_the_prince"
                        min />
                <User 
                        src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                        alt="prince"
                        name="Man_the_prince"
                        min />
            </div>
        </div>
    )
}