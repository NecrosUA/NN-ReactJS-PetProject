import type { FC } from "react";
import * as Styled from "./StaticPage.styled";

export interface StaticPageProps {
  title: string;
}

export const StaticPage: FC<StaticPageProps> = ({ title }) => {
  return (
    <Styled.PageContainer>
      <Styled.PageTitle>{title}</Styled.PageTitle>
    </Styled.PageContainer>
  );
};