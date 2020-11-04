import React from 'react';

const MenuLink = ({children, isActive, changeActiveBtn, id}) => {

   const styles={textDecoration:'underline',
                color:'white'};

    return (
    <button
        onClick={()=>changeActiveBtn(id)}
        style={isActive ? styles : null}>
            {children}
    </button>
     );
}

export default MenuLink;