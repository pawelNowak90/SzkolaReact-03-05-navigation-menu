import React, {useState} from 'react';

import MenuLink from './MenuLink';
import './MenuLink.css'

const Menu = () => {
    const [isActive, setIsActive]=useState(true);
    const changeActiveBtn = (id)=>{
        let newButtons=Array.from(buttons);
        console.log(newButtons);

        newButtons.forEach(btn=>{
            if (btn.id === id){
                btn.isActive = !btn.isActive;
            }
        })

        console.log(newButtons);

    }

    const buttons=[
        { id:0,
        name:"Home",
        to:"/",
        isActive:true},
            { id:1,
            name:"About",
            to:"/about",
            isActive:false},
        { id:2,
        name:"Contact",
        to:"/contact",
        isActive:false},
            { id:3,
            name:"Posts",
            to:"/posts",
            isActive:false}
    ]
    const buttonsToDisplay=buttons.map(button => (
        <MenuLink
            key={`btn-${button.id}`}
            id={button.id}
            isActive={button.isActive}
            changeActiveBtn={changeActiveBtn}
            to={button.to}>
                {button.name}
        </MenuLink>
    ))



    return (
    <React.Fragment>
        {buttonsToDisplay}
    </React.Fragment>
     );
}
 
export default Menu;