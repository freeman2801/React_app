import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://www.yourdictionary.com/image/articles/5723.Man.jpg"
                alt="Man"
                name="some_cool_man"/>

            <Palette/>    
        </div>
    )
}

export default Profile;