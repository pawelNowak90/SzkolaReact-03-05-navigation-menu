import React from 'react';

const MenuLink = ({children, isActive, changeActiveBtn, id}) => {

   const styles={color:'white'};

    return (
    <button
        onClick={()=>changeActiveBtn(id)}
        style={isActive ? styles : null}>
            {children},
            {isActive ? `wskaźnik jest ${isActive}` : `wskaznik jest ${isActive}`}
    </button>
     );
}

export default MenuLink;