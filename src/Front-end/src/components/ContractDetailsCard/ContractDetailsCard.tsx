import { useState, type FC } from "react";
import * as Styled from "./ContractDetailsCard.styled";
import { Box } from "@mui/system";
import checkPrimary from '../../images/checkPrimary.svg';
import Image from 'react-bootstrap/Image';
import accordionPoliygon from '../../images/accordionPoligonPrimary.svg';

export interface ContractDetailsProps {
    insuranceLimits: {
        limit: string;
        type: string;
        details: string;
        description: string;
    };
    copayments: {
        id: number[];
        amount: number[];
        type: string[];
        details?: string[];
        description?: string[];
    };
    extendedCoveragePlus: boolean;
    extendedCopayments: {
        id: number[];
        amount: number[];
        type: string[];
        details?: string[];
        description?: string[];
    };
    car: {
        plateNumber: string;
        fuelType: string;
        VINcode: string;
        manufacturer: string;
        model: string;
        performance: number;
        volume: number;
    };
    insurer: {
        name: string;
        surname: string;
        country: string;
        address: string;
        city: string;
        postalCode: string;
        email: string;
        phone: string;
    };
}

export const ContractDetailsCard: FC<ContractDetailsProps> = ({
    insuranceLimits,
    copayments,
    extendedCoveragePlus,
    extendedCopayments,
    car,
    insurer
}) => {
    const [detailsOpen, setDetailsOpen] = useState(false);

    const copaymentItems = copayments.id.map((_, i) => ({
        key: `copay-${copayments.id[i] ?? i}`,
        amount: copayments.amount[i],
        type: copayments.type[i],
        details: copayments.details?.[i],
        description: copayments.description?.[i],
    }));

    const extendedItems = extendedCoveragePlus
        ? extendedCopayments.id.map((_, i) => ({
            key: `ext-${extendedCopayments.id[i] ?? i}`,
            amount: extendedCopayments.amount[i],
            type: extendedCopayments.type[i],
            details: extendedCopayments.details?.[i],
            description: extendedCopayments.description?.[i],
        }))
        : [];

    const allItems = [...copaymentItems, ...extendedItems];

    return (

        <Styled.PageContainer>
            <Styled.TextHeaderWrapper>
                Detail smlouvy
            </Styled.TextHeaderWrapper>
            <Styled.Card>
                <Styled.ContentWrapper>
                    <Styled.BodyHeaderText>Pojistné krytí</Styled.BodyHeaderText>
                    <Styled.HorizontalDivider />

                    <Styled.DetailRow>
                        <Box className="label">Limit<br />Druh krytí</Box>
                        <Box className="type">{insuranceLimits.limit}<br />{insuranceLimits.type}</Box>
                        <Box className="details-description">
                            <Styled.CheckIconWrapper>
                                <Image src={checkPrimary} />
                            </Styled.CheckIconWrapper>
                            {insuranceLimits.details}
                        </Box>
                        <Box className="details-description">
                            <Styled.CheckIconWrapper>
                                <Image src={checkPrimary} />
                            </Styled.CheckIconWrapper>
                            {insuranceLimits.description}
                        </Box>
                    </Styled.DetailRow>

                    {/* ACCORDION CONTENT */}
                    <Styled.AccordionContent $open={detailsOpen}>
                        <Styled.AccordionInner>

                            {allItems.map((item) => (
                                <Styled.DetailRow key={item.key}>
                                        <Box className="label">Limit<br />Druh krytí</Box>
                                    <Box className="type">
                                        {item.amount}<br />{item.type}
                                    </Box>
                                    {item.details && (
                                        <Box className="details-description">
                                            <Styled.CheckIconWrapper>
                                                <Image src={checkPrimary} />
                                            </Styled.CheckIconWrapper>
                                            {item.details}
                                        </Box>
                                    )}
                                    {item.description && (
                                        <Box className="details-description">
                                            <Styled.CheckIconWrapper>
                                                <Image src={checkPrimary} />
                                            </Styled.CheckIconWrapper>
                                            {item.description}
                                        </Box>
                                    )}
                                </Styled.DetailRow>
                            ))}

                        </Styled.AccordionInner>
                    </Styled.AccordionContent>

                    <Box sx={{ fontWeight: 'bold', marginTop: 2, textAlign: 'justify' }}>V případě škody na vozidle nebo jeho sklech je povinnost opravovat ve smluvním servisu doporučeném pojišťovnou.</Box>
                    <Styled.HorizontalDivider />

                    {/* ACCORDION BUTTON */}
                    <Styled.AccordionToggle onClick={() => setDetailsOpen(o => !o)}>
                        {detailsOpen ? 'Skrýt' : 'Zobrazit více'}
                        <Styled.AccordionArrow src={accordionPoliygon} alt="" $open={detailsOpen} />
                    </Styled.AccordionToggle>

                    <Styled.BodyHeaderText>Pojištěné vozidlo</Styled.BodyHeaderText>
                    <Styled.HorizontalDivider />

                    <Styled.BodyRow>
                        <Box className="label">SPZ</Box>
                        <Box className="type">{car.plateNumber}</Box>
                        <Box className="label">Výrobce</Box>
                        <Box className="type">{car.manufacturer}</Box>
                        <Box className="label">Model</Box>
                        <Box className="type">{car.model}</Box>
                    </Styled.BodyRow>
                    <Styled.BodyRow>
                        <Box className="label">PALIVO</Box>
                        <Box className="type">{car.fuelType}</Box>
                        <Box className="label">Objem</Box>
                        <Box className="type">{car.volume}</Box>
                        <Box className="label">Výkon</Box>
                        <Box className="type">{car.performance}</Box>
                    </Styled.BodyRow>
                    <Styled.BodyRow>
                        <Box className="label">VIN</Box>
                        <Box className="type">{car.VINcode}</Box>
                    </Styled.BodyRow>

                    <Styled.BodyHeaderText>Pojistník</Styled.BodyHeaderText>
                    <Styled.HorizontalDivider />
                    <Styled.BodyRow>
                        <Box className="label">Jméno</Box>
                        <Box className="type">{insurer.name}</Box>
                        <Box className="label">Příjmení</Box>
                        <Box className="type">{insurer.surname}</Box>
                        <Box className="label">Stát</Box>
                        <Box className="type">{insurer.country}</Box>
                    </Styled.BodyRow>
                    <Styled.BodyRow>
                        <Box className="label">Adresa</Box>
                        <Box className="type">{insurer.address}</Box>
                        <Box className="label">Město</Box>
                        <Box className="type">{insurer.city}</Box>
                        <Box className="label">PSČ-Obec</Box>
                        <Box className="type">{insurer.postalCode}</Box>
                    </Styled.BodyRow>

                </Styled.ContentWrapper>
            </Styled.Card>
        </Styled.PageContainer>
    )
};