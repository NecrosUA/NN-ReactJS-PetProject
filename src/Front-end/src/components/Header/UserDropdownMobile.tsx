import type { FC } from "react";
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import * as Styled from "./UserDropdownMobile.styled";
import mobileMenuIcon from '../../images/mobileMenuIcon.svg';



export const UserDropdownMobile: FC<{ username: string }> = ({ username }) => {
    return (

        <Styled.MobileDropdownmenu>
            <Dropdown.Toggle as={Styled.MobileDropdownButton} aria-label="Open mobile menu">
                <Image src={mobileMenuIcon} alt="menu icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Smlouva</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Pojistné události</Dropdown.Item>
                <Dropdown.Item href="#/action-2">{username}</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Odhlásit</Dropdown.Item>
            </Dropdown.Menu>
        </Styled.MobileDropdownmenu>
    );
};