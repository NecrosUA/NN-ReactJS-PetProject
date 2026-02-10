import { styled } from "@mui/system";
import Button from "react-bootstrap/esm/Button";
import Dropdown from "react-bootstrap/esm/Dropdown";

export const MobileDropdownButton = styled(Button)(({ theme }) => ({
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginRight: theme.spacing(1),
    '&:hover': {
        background: 'transparent',
        transform: 'translateY(-1px)',
    },
    '& img': {
        width: 30,
        height: 30,
        objectFit: 'contain',
        display: 'block',
    },
}));

export const MobileDropdownmenu = styled(Dropdown)(({ theme }) => ({
    '& .dropdown-toggle::after': { // Hide the default dropdown arrow
        display: 'none',
    },
    '.dropdown-menu': {
        left: 'auto',
        right: 0,
        marginTop: theme.spacing(1),
    },
}));