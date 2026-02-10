import { styled } from "@mui/system";
import { Nav as Navi, Navbar, type NavbarProps, type NavLinkProps } from "react-bootstrap";
import Image from 'react-bootstrap/Image';


export const Wrapper = styled(Navbar)<NavbarProps>(({ theme }) => ({
    marginBottom: "10px",
    alignItems: "center",
    justifyContent: "center",
    height: "90px",
    [theme.breakpoints.down('lg')]: {
        height: "70px",
        justifyContent: "space-between",
    },
}));

export const Brand = styled(Navbar.Brand)(({ theme }) => ({
    fontSize: "20px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "Bold",
}));

export const Nav = styled(Navi)(({ theme }) => ({
    fontFamily: "Inter, sans-serif",
}));

export const NavLink = styled(Navi.Link)<NavLinkProps>(({ theme }) => ({
    color: "var(--bs-secondary)",
    textDecoration: "none",
    transition: "color .15s, text-decoration-color .15s",
    cursor: "pointer",
    "&:hover": {
        color: "var(--bs-primary)",
        textDecoration: "underline",
        textDecorationThickness: "2px",
        textUnderlineOffset: "10px",
    },
}));

export const Logo = styled(Image)(({ theme }) => ({
    display: 'block',
    marginRight: theme.spacing(3),
    height: '42px',
    [theme.breakpoints.down('lg')]: {
        height: '39px',
        marginLeft: theme.spacing(3),
    },
}));

export const MobileMenuWrapper = styled(Navbar)<NavbarProps>(({ theme }) => ({
    display: "flex",
}));

