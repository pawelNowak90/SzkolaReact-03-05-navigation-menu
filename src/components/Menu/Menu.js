import React from 'react';

import MenuLink from './MenuLink';
import './MenuLink.css'

class Menu extends React.Component {
    state = {
        buttons:[
        { id:0,
        name:"Home",
        to:"/",
        isActive:false},
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
    ] }

    changeActiveBtn = (id)=>{
        let buttons=Array.from(this.state.buttons);
        buttons.forEach(btn=>{
            btn.isActive = false;
            if (btn.id === id){
                btn.isActive = true;
            }
        })
        this.setState({buttons})

    }


    render() {
        const buttonsToDisplay=this.state.buttons.map(button => (
            <MenuLink
                key={`btn-${button.id}`}
                id={button.id}
                isActive={button.isActive}
                changeActiveBtn={this.changeActiveBtn}
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
}
 
export default Menu;
