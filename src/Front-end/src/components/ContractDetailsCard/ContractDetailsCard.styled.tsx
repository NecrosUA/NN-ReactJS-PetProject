import { Stack, styled } from "@mui/system";
import { Button } from "react-bootstrap";

export const TextHeaderWrapper = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(1),
  fontFamily: "Inter, sans-serif",
  fontSize: "30px",
}));

export const PageContainer = styled(Stack)(({ theme }) => ({
  maxWidth: 1250,
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: theme.spacing(0, 4),
}));

export const Card = styled(Stack)(({ theme }) => ({
  background: "var(--bs-gray-100)",
  border: '1px solid var(--bs-primary)',
  borderRadius: 0,
  boxShadow: '0 2px 6px var(--bs-gray-300)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 692, //By Figma design              
  overflow: 'hidden',
  marginBottom: theme.spacing(4),
}));

export const ContentWrapper = styled(Stack)(({ theme }) => ({
    marginLeft: theme.spacing(2.4), //TODO: rewrite all to theme.spacing
    marginRight: theme.spacing(2.4),
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(4),
}));

export const BodyHeaderText = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(4),
  fontSize: 24,
  fontWeight: 400,
  fontFamily: "Inter, sans-serif",
}));

export const HorizontalDivider = styled(Stack)(({theme}) => ({
    height: "1px",
    backgroundColor: "var(--bs-primary)",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
}));

export const DetailRow = styled(Stack)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '80px 130px 350px 350px 1fr', //Grid configuration
  columnGap: theme.spacing(6),
  fontSize: 16,
  fontFamily: "Inter, sans-serif",
  '& .label': {
    textAlign: 'left',
    lineHeight: 1.8,
  },
  '& .type': {
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 1.8,
  },
  '& .details-description': {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'flex-start', //Allign text with icon properly
    gap: theme.spacing(1),  
    lineHeight: 1.3,
  },
  // mobile design configurations
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '80px 150px auto auto',
    columnGap: theme.spacing(2),
    '& .details-description': {
      textAlign: 'justify',
    },
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',     
    columnGap: theme.spacing(2),
    rowGap: theme.spacing(2),          
    alignItems: 'flex-start',
    '& .details-description': {
      textAlign: 'justify',
    },
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '100px 1fr',
    columnGap: theme.spacing(3),
    alignItems: 'start',
    // label stays in first column
    '& .label': {
      gridColumn: '1 / 2',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
    },
    '& .value': {
      marginBottom: theme.spacing(1),
    },
    '& .details-description': {
      display: 'flex',
      gridColumn: '1 / 3',
      alignItems: 'flex-start',
      gap: theme.spacing(1),
      // ensure long text doesn't create extra columns
      width: '100%',
      textAlign: 'justify',
    },
  },    
}));

export const BodyRow = styled(Stack)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '100px 100px 100px 100px 100px 200px 1fr', //Grid configuration
  columnGap: theme.spacing(6),
  fontSize: 16,
  fontFamily: "Inter, sans-serif",
  
  '& .label': {
    textAlign: 'left',
    lineHeight: 2,
  },
  '& .type': {
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 2,
  },
  // mobile design configurations
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '80px 150px 80px 150px 80px 150px 1fr',
    columnGap: theme.spacing(2),
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '50px 80px 80px 100px 50px auto',
    columnGap: theme.spacing(2),
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '80px auto',
    flexWrap: 'wrap',
    '& .label': {
      gridColumn: '1 / 2',
      display: 'flex',
      textAlign: 'left',
    },
  },    
}));

export const CheckIconWrapper = styled(Stack)(({theme}) => ({
    display: 'inline-flex', 
    width: "16px",
    height: "16px",
    marginTop: theme.spacing(0.5)
}));

//Accordion styles
export const AccordionToggle = styled(Button)(({ theme }) => ({
  background: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  fontFamily: 'Inter, sans-serif',
  fontSize: 14,
  fontWeight: 600,
  color: "var(--bs-primary)",
  lineHeight: 1,
  '&:hover, &:active, &:focus, &:focus-visible': {
    background: 'transparent !important',
    color: 'var(--bs-primary)',
    boxShadow: 'none'
  }
}));

export const AccordionArrow = styled('img', {
  shouldForwardProp: (prop) => prop !== '$open'
})<{ $open: boolean }>(({ $open }) => ({
  width: 16,
  height: 10,
  transition: 'transform .25s ease',
  transform: `rotate(${$open ? 180 : 0}deg)`
}));

export const AccordionContent = styled(Stack, {
  shouldForwardProp: (prop) => prop !== '$open'
})<{ $open: boolean }>(({ $open }) => ({
  overflow: 'hidden',
  transition: 'max-height .32s ease',
  maxHeight: $open ? 'auto' : 0
}));

export const AccordionInner = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1.5),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  fontFamily: 'Inter, sans-serif',
  fontSize: 16,
}));