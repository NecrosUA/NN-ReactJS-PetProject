import { format, isValid, parse } from "date-fns";

export const claimDateFormat = "dd.MM.yyyy";

export const parseClaimDate = (value: string) => {
  const parsedDate = parse(value, claimDateFormat, new Date());

  return isValid(parsedDate) ? parsedDate : null;
};

export const formatClaimDate = (value: Date | null) => {
  if (!value) {
    return "";
  }

  return format(value, claimDateFormat);
};