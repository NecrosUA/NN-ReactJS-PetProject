import { styled } from "@mui/system";
import Button from "react-bootstrap/esm/Button";

export const MobileEmailButton = styled(Button)(({ theme }) => ({
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