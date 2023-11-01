import { useState } from "react"

import styled from "styled-components"

export const ResponsiveMenu = (props: any) => {

    const [ isOpen, setIsOpen] = useState<boolean>(true);


    return (
            <>
            <MobileMenu onClick={() => !isOpen ? setIsOpen(true) : setIsOpen(false)}>
                <div></div>
                <div></div>
                <div></div>
            </MobileMenu>
            
            <List className={`${!isOpen ? "active" : ""}`}>
                {props.children}
            </List>
            </>
        
    )
}

const List = styled.ul`
    display: flex;
    font-size: var(--text-sm);
    color: #fff;
    gap: 20px;
    flex-direction: row;

    li{
        letter-spacing: 3px;
        cursor: pointer;

    }

    @media (max-width: 999px) {
        position: absolute;
        top: 12vh;
        right: 0;
        width: 50vw;
        height: 80vh;
        background: var(--background-dark);
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        transform: translateX(100%);
        transition: 0.3s ease-in-out;

        &.active{
            transform: translateX(0%);

            li{
                opacity: 100;
            }
        }


        
        li{
            opacity: 0;
        }
    }
`

const MobileMenu = styled.div`
    cursor: pointer;
    display: none;
    div{
        width: 32px;
        height: 2px;
        background: #fff;
        margin: 8px;
    }

    @media (max-width: 999px) {
        display: block;
        z-index: 10;
    }
`