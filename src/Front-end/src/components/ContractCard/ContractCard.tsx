import type { FC } from "react";
import * as Styled from "./ContractCard.styled";
import { ContractTimelineProgress } from "./ContractTimelineProgress";
import { Button } from "react-bootstrap";
import checkPrimary from '../../images/checkPrimary.svg';
import carIcon from '../../images/carIcon.png';
import Image from 'react-bootstrap/Image';
import { Box } from "@mui/system";

export interface ContractCardProps {
    contractStartDate: string;
    contractEndDate: string;
    contractDuration: number;
    carBrand: string;
    plateNumber: string;
    isContractActive: boolean;
    productName: string;
    productDescription: string;
    coveragePeriod: ('monthly' | 'annual');
    paymentByPeriod: number;
    annualPrice: number;
    odometerReadingAtDate: string;
    isOdometerVerified: boolean;
    odometerStatus: string;
}

export const ContractCard: FC<ContractCardProps> = ({
    contractStartDate,
    contractEndDate,
    contractDuration,
    carBrand,
    plateNumber,
    isContractActive,
    productName,
    productDescription,
    coveragePeriod,
    paymentByPeriod,
    annualPrice,
    odometerReadingAtDate,
    isOdometerVerified,
    odometerStatus }) => {

    return (
        <Styled.PageContainer>
            <Styled.TextHeaderWrapper>
                Moje smlouva
            </Styled.TextHeaderWrapper>
            <Styled.Card>
                {/* HEADER */}
                <Styled.HeaderSection>
                    <Styled.CarInfoWrapper>
                        <Image src={carIcon} roundedCircle className="car-icon"/>
                        <Styled.CarInfoWrapper>
                            <Styled.CarDetailsTextWrapper>
                                <Box className="text-header">Pojištění vozidla:</Box>
                                <Box className="brand-and-plate-number">{carBrand} {plateNumber}</Box>
                            </Styled.CarDetailsTextWrapper>
                        </Styled.CarInfoWrapper>
                    </Styled.CarInfoWrapper>

                    <Styled.StatusBadge>
                        {isContractActive ? 'Aktivní' : 'Neaktivní'}
                        {isContractActive && <Image src={checkPrimary} style={{ marginLeft: 10 }} />}
                    </Styled.StatusBadge>

                    <Styled.ProgressBarComponentsWrapper>
                        <ContractTimelineProgress duration={contractDuration} />
                        <Styled.TextProgressBarWrapper>
                            <Styled.TextLeftWrapper>
                                <Box className="label">Počátek pojištění:</Box>
                                <Box className="value">{contractStartDate}</Box>
                            </Styled.TextLeftWrapper>
                            <Styled.TextRightWrapper>
                                <Box className="label">Konec/výročí pojištění:</Box>
                                <Box className="value">{contractEndDate}</Box>
                            </Styled.TextRightWrapper>
                        </Styled.TextProgressBarWrapper>
                    </Styled.ProgressBarComponentsWrapper>
                </Styled.HeaderSection>

                {/* BODY */}
                <Styled.BodySection>
                    <Styled.BodyRow>
                        <Box className="label">Název produktu</Box>
                        <Box className="value">{productName}</Box>
                        <Box className="label">Roční pojistné</Box>
                        <Box className="value">{annualPrice} Kč</Box>
                    </Styled.BodyRow>
                    <Styled.BodyRow>
                        <Box className="label">Pojistné podmínky</Box>
                        <Box className="value">{productDescription}</Box>
                        <Box className="label">Pojistné dle frekvence</Box>
                        <Box className="value">{paymentByPeriod} Kč
                            <Styled.AnnualBadge>
                                {coveragePeriod === 'annual' ? 'Ročně' : 'Měsíčně'}
                            </Styled.AnnualBadge>
                        </Box>
                    </Styled.BodyRow>
                </Styled.BodySection>

                {/* FOOTER */}
                <Styled.FooterSection>
                    <Styled.MetaBlock>
                        <Button variant="primary" style={{ fontWeight: 600 }}>Zelená karta </Button>
                        <Button variant="outline-primary" style={{ fontWeight: 600 }}>Nahlásit pojistnou událost</Button>
                    </Styled.MetaBlock>
                    <Styled.OdometerInfoCard>
                        <Box className="label">Stav tachometru k {odometerReadingAtDate}</Box>
                        <Box className="value">{odometerStatus} km
                            <Styled.OdometerProofsBadge>
                                {isOdometerVerified ? 'Doloženo' : 'Nedoloženo'}
                                {isOdometerVerified && <Image src={checkPrimary} style={{ marginLeft: 10 }} />}
                            </Styled.OdometerProofsBadge>
                        </Box>
                    </Styled.OdometerInfoCard>
                </Styled.FooterSection>
            </Styled.Card>
        </Styled.PageContainer>
    );
}
