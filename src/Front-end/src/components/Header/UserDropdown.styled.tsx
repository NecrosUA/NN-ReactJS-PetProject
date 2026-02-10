import { Box, Stack, styled } from '@mui/system';
import { NavDropdown, type NavbarProps } from 'react-bootstrap';

export const AvatarWrapper = styled(Stack)(({ theme }) => ({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'var(--bs-gray-300)',
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(1),
}));

export const Trigger = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  fontFamily: 'Inter, sans-serif',
  fontSize: 16,
  color: 'var(--bs-gray-600)',
  userSelect: 'none',
  '.username': {
    lineHeight: 1.2,
  },
  '.dropdown-arrow': {
    height: 15,
    width: 22,
    transition: 'transform .25s ease',
    display: 'block'
  }
}));

export const UserDropDownWrapper = styled(NavDropdown)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  '&.show .dropdown-arrow': {
    transform: 'rotate(180deg)'
  },
  '.dropdown-menu': {
    right: theme.spacing(0),
    left: 'auto',
    marginTop: theme.spacing(2), 
    minWidth: 180,
  },
    '& > a.dropdown-toggle::after': { // Hide the default dropdown arrow
        display: 'none',
    },
}));

export const NavDropdownItem = styled(NavDropdown.Item)<NavbarProps>(({ theme }) => ({
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    color: 'var(--bs-secondary)',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: 'var(--bs-primary)',
        color: 'var(--bs-white)'
    },
}));

export const VerticalDivider = styled(Stack)(({ theme }) => ({
    width: "1px",
    height: "50px",
    backgroundColor: "var(--bs-gray-300)",
    marginLeft: "15px",
    marginRight: "20px",
}));