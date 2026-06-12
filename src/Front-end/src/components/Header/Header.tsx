import carLogo from '../../images/carLogo.png';
import * as Styled from "./Header.styled";
import { UserDropdown } from './UserDropdown';
import useTheme from '@mui/system/useTheme';
import useMediaQuery from '@mui/system/useMediaQuery';
import type { FC } from 'react';
import { UserDropdownMobile } from './UserDropdownMobile';
import { UserEmailButtonMobile } from './UserEmailButtonMobile';
import { useNavigate, useRouterState } from '@tanstack/react-router';

export const Header: FC<{ user?: string }> = ({ user = "Guest" }) => {
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));
    const navigate = useNavigate();
    const pathname = useRouterState({ select: (state) => state.location.pathname });

    const isActive = (routePath: string) => pathname === routePath;

    const handleNavigate = (routePath: string) => {
        void navigate({ to: routePath });
    };

    return (
        <Styled.Wrapper bg="light" expand="lg">
            <Styled.Logo src={carLogo} alt="logo" />
            {!isTabletOrSmaller ? (
                <>
                    <Styled.Brand>
                        InsureCar
                    </Styled.Brand>
                    <Styled.Nav>
                        <Styled.NavLink
                            href="/"
                            active={isActive('/')}
                            onClick={(event) => {
                                event.preventDefault();
                                handleNavigate('/');
                            }}
                        >
                            Smlouva
                        </Styled.NavLink>
                        <Styled.NavLink
                            href="/claims"
                            active={isActive('/claims')}
                            onClick={(event) => {
                                event.preventDefault();
                                handleNavigate('/claims');
                            }}
                        >
                            Pojistné události
                        </Styled.NavLink>
                        <Styled.NavLink
                            href="/contacts"
                            active={isActive('/contacts')}
                            onClick={(event) => {
                                event.preventDefault();
                                handleNavigate('/contacts');
                            }}
                        >
                            Kontakt
                        </Styled.NavLink>
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