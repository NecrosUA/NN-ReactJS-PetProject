import type { FC } from "react";
import Image from 'react-bootstrap/Image';
import * as Styled from "./UserDropdown.styled";
import userLogo from '../../images/userLogo.png';
import dropdownPolygon from '../../images/dropdownPolygon.svg';
import Box from "@mui/system/Box";

export interface UserDropdownProps {
    username: string;
    avatar?: string;
}

export const UserDropdown: FC<UserDropdownProps> = ({ username, avatar }) => {
    const avatarNode = (
        <Styled.AvatarWrapper>
            <Image
                src={avatar ?? userLogo}
                alt={username}
                height={avatar ? 50 : 39}
                className={avatar ? "rounded-circle" : ""}
            />
        </Styled.AvatarWrapper>
    );

    return (
        <>
            <Styled.VerticalDivider />
            <Styled.UserDropDownWrapper
                id="user-nav-dropdown"
                title={
                    <Styled.Trigger>
                        {avatarNode}
                        <Box className="username">{username}</Box>
                        <Image src={dropdownPolygon} className="dropdown-arrow" />
                    </Styled.Trigger>
                }
            >
                <Styled.NavDropdownItem href="#logout">Odhlásit</Styled.NavDropdownItem>
            </Styled.UserDropDownWrapper>
            <Styled.VerticalDivider />
        </>
    );
};
