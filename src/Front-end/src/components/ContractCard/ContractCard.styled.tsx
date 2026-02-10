import { alignItems, Box, flexDirection, margin, Stack, styled } from "@mui/system";

export const TextHeaderWrapper = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(3),
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
  background: "var(--bs-white)",
  border: '1px solid var(--bs-primary)',
  borderRadius: 16,
  boxShadow: '0 2px 6px var(--bs-gray-300)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 400, //By Figma design              
  overflow: 'hidden',
}));

//Header Section styles
export const HeaderSection = styled(Stack)(({ theme }) => ({
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  background: "var(--bs-light)",
  justifyContent: 'flex-start',
  gap: theme.spacing(3),
  padding: theme.spacing(4, 2, 8),
  borderBottom: '1px solid var(--bs-gray-300)',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
  },
}));
export const CarInfoWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
    '& .car-icon': {
    height: 84, 
    [theme.breakpoints.down('sm')]: {
      height: 64,
    },
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row-reverse',
  '& .car-icon': {
      marginLeft: theme.spacing(3),
    },
  },
}));
export const CarDetailsTextWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  '& .text-header': {
    fontSize: 20,
    fontWeight: 400,
  },
  '& .brand-and-plate-number': {
    fontSize: 35,
    fontWeight: 600,
  },
}));
export const StatusBadge = styled(Box)(({ theme }) => ({
  fontSize: 12,
  padding: theme.spacing(0.5, 1),
  borderRadius: 12,
  background: "var(--primary-light)",
  color: "var(--bs-primary)",
  fontWeight: "bold",
  letterSpacing: 1,
  marginLeft: theme.spacing(2),
  marginRight: 'auto',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
}));
export const ProgressBarComponentsWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  flexDirection: 'column',
  marginBottom: theme.spacing(1),
  marginRight: 'auto',
  maxWidth: 550,
  [theme.breakpoints.down('xl')]: { 
    maxWidth: '100%',
  },
}));
export const TextProgressBarWrapper = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  marginTop: theme.spacing(1),
  gap: theme.spacing(4),
}));
export const TextLeftWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  textAlign: 'left',
  flex: 1,
  '& .label': {
    fontSize: 16,
    color: 'var(--bs-gray-800)',
    fontWeight: 500,
  },
  '& .value': {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 4,
  },
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
      whiteSpace: 'wrap',
  },
}));
export const TextRightWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  textAlign: 'right',
  '& .label': {
    fontSize: 16,
    color: 'var(--bs-gray-800)',
    fontWeight: 500,
  },
  '& .value': {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 4,
  },
  [theme.breakpoints.down('sm')]: {
      whiteSpace: 'wrap',
  },
}));

//Body Section styles
export const BodySection = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  fontFamily: "Inter, sans-serif",
  fontSize: 20,
  lineHeight: 1.5,
  padding: theme.spacing(3, 5),
  borderBottom: '1px solid var(--bs-gray-300)',
  overflowY: 'auto',
  minHeight: 0
}));
export const BodyRow = styled(Stack)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '220px 220px 260px 1fr', //Grid configuration
  columnGap: theme.spacing(7),
  rowGap: theme.spacing(1),
  textAlign: 'left',
  '& .label': {
    color: 'var(--bs-primary)',
    fontWeight: 500,
    textAlign: 'left',
  },
  '& .value': {
    color: 'var(--bs-primary)',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  // mobile design configurations
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '180px 180px 150px 150px',
    columnGap: theme.spacing(5),
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
    columnGap: theme.spacing(4),
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    '& .label': {
      marginTop: theme.spacing(1),
    },
    '& .value': {
      marginBottom: theme.spacing(1),
    },
  },  
}));
export const AnnualBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: 10,
  padding: theme.spacing(0.25, 1),
  marginLeft: theme.spacing(1.5),
  borderRadius: 12,
  background: "var(--bs-gray-500)",
  color: "var(--bs-gray-800)",
  fontWeight: "bold",
  verticalAlign: 'middle',
}));

//Footer Section styles
export const FooterSection = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  padding: theme.spacing(2, 3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));
export const MetaBlock = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },  
}));
export const OdometerInfoCard = styled(Box)(({ theme }) => ({
  fontSize: 16,
  fontFamily: "Inter, sans-serif",
  borderRadius: 6,
  padding: theme.spacing(0.5, 1),
  background: "var(--bs-gray-300)",
  flexDirection: 'column',
  '& .label': {
    textAlign: 'left',
    marginRight: theme.spacing(3),
  },
  '& .value': {
    fontWeight: 'bold',
    textAlign: 'left',
  },
}));
export const OdometerProofsBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  fontSize: 14,
  padding: theme.spacing(0.25, 1),
  borderRadius: 12,
  background: "white",
  color: "var(--bs-primary)",
  fontWeight: "bold",
  marginLeft: theme.spacing(3),
  marginBottom: theme.spacing(0.5),
}));