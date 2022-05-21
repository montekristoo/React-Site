import React from "react";
import { GrClose } from "react-icons/gr";

export default function DisplayNav() {

    const [closed, isClosed] = React.useState(true);
    
    const toggle = () => {

        return isClosed(!closed)

    }



  return (
      <>
          {closed && (
         <div className="navBurgerMenu">
        <GrClose className="icon"
          style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          }}
          size="20px"
          color="white"
                      cursor="pointer"
                      onClick={toggle}
    />
        <a href="/about">About</a>
      </div>
          )}
      
    </>
  );
}
