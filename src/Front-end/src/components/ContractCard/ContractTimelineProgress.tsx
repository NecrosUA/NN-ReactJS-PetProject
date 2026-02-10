import type { FC } from "react";
import { ProgressBar } from "react-bootstrap";
import * as Styled from "./ContractTimelineProgress.styled";

interface ContractTimelineProgressProps {
  duration: number;
}

export const ContractTimelineProgress: FC<ContractTimelineProgressProps> = ({ duration }) => {
  return (
    <>
      <Styled.ProgressBarWrapper>
        <ProgressBar now={duration} />
      </Styled.ProgressBarWrapper>
    </>
  );
};