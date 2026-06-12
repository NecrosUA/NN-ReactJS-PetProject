import { Box, Stack, styled } from "@mui/system";

export const PageContainer = styled(Stack)(({ theme }) => ({
  maxWidth: 1250,
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: theme.spacing(0, 4),
}));

export const PageTitle = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  fontFamily: "Inter, sans-serif",
  fontSize: "30px",
}));