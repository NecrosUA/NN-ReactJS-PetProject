import carLogo from '../../images/carLogo.png';
import * as Styled from "./Header.styled";
import { UserDropdown } from './UserDropdown';
import useTheme from '@mui/system/useTheme';
import useMediaQuery from '@mui/system/useMediaQuery';
import type { FC } from 'react';
import { UserDropdownMobile } from './UserDropdownMobile';
import { UserEmailButtonMobile } from './UserEmailButtonMobile';

export const Header: FC<{ user?: string }> = ({ user = "Guest" }) => {
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Styled.Wrapper bg="light" expand="lg">
            <Styled.Logo src={carLogo} alt="logo" />
            {!isTabletOrSmaller ? (
                <>
                    <Styled.Brand>
                        InsureCar
                    </Styled.Brand>
                    <Styled.Nav>
                        <Styled.NavLink>Smlouva</Styled.NavLink>
                        <Styled.NavLink>Pojistné události</Styled.NavLink>
                        <Styled.NavLink>Kontakt</Styled.NavLink>
                    </Styled.Nav>
                    <UserDropdown username={user} />
                </>
            ) : (
                <>
                    <Styled.MobileMenuWrapper>
                        <UserEmailButtonMobile />
                        <UserDropdownMobile username={user} />
                    </Styled.MobileMenuWrapper>
                </>
            )}
        </Styled.Wrapper>
    )
};