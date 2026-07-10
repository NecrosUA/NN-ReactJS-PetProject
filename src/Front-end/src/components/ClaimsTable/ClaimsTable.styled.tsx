import { Box, Stack, styled } from "@mui/system";

export const PageContainer = styled(Stack)(({ theme }) => ({
  maxWidth: 1400,
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: theme.spacing(3, 4, 4),
  gap: theme.spacing(2),
}));

export const HeaderBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const Title = styled(Box)(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "30px",
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const Subtitle = styled(Box)(({ theme }) => ({
  fontSize: "15px",
  color: theme.palette.text.secondary,
}));

export const TableShell = styled(Box)(() => ({
  borderRadius: 20,
  border: "1px solid var(--gray-300)",
  overflow: "hidden",
  background: "#fff",
  boxShadow: "0 14px 40px rgba(15, 23, 42, 0.08)",
  "@media (max-width: 600px)": {
    borderRadius: 16,
  },
}));