import { Box, Stack, styled } from "@mui/system";

export const PageContainer = styled(Stack)(({ theme }) => ({
  maxWidth: 1250,
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: theme.spacing(0, 4),
}));

export const TextHeaderWrapper = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  fontFamily: "Inter, sans-serif",
  fontSize: "30px",
}));

export const Card = styled(Stack)(({ theme }) => ({
  background: "var(--bs-white)",
  border: "1px solid var(--bs-primary)",
  borderRadius: 16,
  boxShadow: "0 2px 6px var(--bs-gray-300)",
  width: "100%",
  padding: theme.spacing(3),
  gap: theme.spacing(2),
}));

export const FormWrapper = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const TextArea = styled("textarea")(({ theme }) => ({
  width: "100%",
  minHeight: 420,
  resize: "none",
  borderRadius: 4,
  border: "1px solid var(--bs-gray-400)",
  padding: theme.spacing(2),
  fontSize: 32,
  lineHeight: 1.25,
  color: "var(--bs-gray-700)",
  backgroundColor: "var(--bs-light)",
  "&::placeholder": {
    color: "var(--bs-gray-700)",
    opacity: 0.9,
  },
  "&:focus": {
    outline: "none",
    borderColor: "var(--bs-primary)",
    boxShadow: "0 0 0 0.2rem rgba(119, 73, 248, 0.15)",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: 320,
    fontSize: 22,
  },
}));

export const Counter = styled(Box)(() => ({
  alignSelf: "flex-end",
  fontSize: 14,
  color: "var(--bs-gray-700)",
}));

export const ValidationError = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  border: "1px solid var(--bs-danger)",
  color: "var(--bs-danger)",
  backgroundColor: "rgba(220,53,69,0.08)",
  borderRadius: 4,
  padding: theme.spacing(1.5, 2),
  fontSize: 18,
}));

export const WarningSign = styled(Box)(() => ({
  width: 22,
  height: 22,
  borderRadius: "50%",
  border: "2px solid var(--bs-danger)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: 14,
}));

export const ActionsRow = styled(Stack)(() => ({
  flexDirection: "row",
  justifyContent: "flex-end",
}));

export const SuccessMessage = styled(Box)(({ theme }) => ({
  border: "1px solid var(--bs-success)",
  color: "var(--bs-success)",
  backgroundColor: "rgba(25, 135, 84, 0.08)",
  borderRadius: 4,
  padding: theme.spacing(1.25, 2),
  fontSize: 16,
}));
