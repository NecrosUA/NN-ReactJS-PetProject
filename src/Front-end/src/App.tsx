import "./App.css";
import { ContractCard, type ContractCardProps } from "./components/ContractCard/ContractCard";
import { ContractDetailsCard, type ContractDetailsProps } from "./components/ContractDetailsCard/ContractDetailsCard";
import { Header } from "./components/Header/Header";

const mockContractCardProps: ContractCardProps = {
    contractStartDate: '21.11.2024',
    contractEndDate: '21.11.2025',
    contractDuration: 60,
    carBrand: 'TOYOTA',
    plateNumber: '1ABC123',
    isContractActive: true,
    productName: 'MojeAuto',
    productDescription: 'ICMojeAuto 2024',
    coveragePeriod: 'annual',
    paymentByPeriod: 26057,
    annualPrice: 26057,
    odometerReadingAtDate: '16.11.2024',
    isOdometerVerified: true,
    odometerStatus: "1,961"
};

const mockContractDetailsProps: ContractDetailsProps = {
  insuranceLimits: {
    limit: "150/150 mil. Kč",
    type: "Povinné ručení",
    details: "Uhradíme škody, které způsobíte někomu jinému provozem svého vozidla",
    description: "Jedná se zejména o újmu vzniklou ublížením na zdraví nebo usmrcením, škody na majetku nebo ušlý zisk"
  },
  copayments: {
    id: [1, 2, 3, 4],
    amount: [5000, 5000, 5000, 5000],
    type: ["Havárie", "Přírodní události", "Vandalismus", "Požár a výbuch"],
    details: [
      "Kryjeme Vás v případech, kdy se vozidlo poškodí například nárazem do stromu nebo střetem s jiným vozidlem (viz pojistné podmínky)",
      "Uhradíme škodu, pokud se vozidlo poškodí padajícím kamením nebo působením chemických látek (viz pojistné podmínky)",
      "Uhradíme škody, pokud Vám zaparkované vozidlo někdo úmyslně poškodí (viz pojistné podmínky)",
      "Uhradíme škody, když Vám vozidlo poškodí oheň nebo výbuch (viz pojistné podmínky)",
    ],
    description: [
      "Uhradíme škodu, pokud se vozidlo poškodí padajícím kamením nebo působením chemických látek nebo při střetu s jiným vozidlem",
      "Uhradíme škody na Vašem vozidle, když Vám auto vezme velká voda nebo když na něj spadne strom",
      "Podrobné informace najdete v pojistných podmínkách Vaší smlouvy",
      "Detail pojistného krytí najdete v pojistných podmínkách Vaší smlouvy",
    ],
  },
  extendedCoveragePlus: true,
  extendedCopayments: {
    id: [11, 12, 13],
    amount: [5000, 5000, 1000],
    type: ["Poškození zvířetem", "Krádež", "Skla"],
    details: [
      "Postaráme se o škody způsobené zvířetem (viz pojistné podmínky)",
      "Kryjeme riziko odcizení celého vozidla nebo jeho částí (viz pojistné podmínky)",
      "Uhradíme škody na sklech Vašeho vozidla včetně poškození kamínky (viz pojistné podmínky)",
    ],
    description: [
      "V případech kdy srazíte kance nebo Vám kuna překouše kabely ve voze",
      "Detail krytí najdete v pojistných podmínkách Vaší smlouvy",
      "Vyplatíme pojistné plnění v případech, kdy je škoda způsobena i na střešním okně nebo na prosklené střeše vozidla",
    ],
  },
  car: {
    plateNumber: "1ABC123",
    fuelType: "Benzin",
    VINcode: "JTDBAMDE0P1234567",
    manufacturer: "TOYOTA",
    model: "YARIS CROSS",
    performance: 85,      // kW
    volume: 1490          // ccm
  },
  insurer: {
    name: "Rostyslav",
    surname: "Kochančuk",
    country: "Česká republika",
    address: "Hlavní 123/3",
    city: "Praha",
    postalCode: "10000",
    email: "rostyslav.kokhanchuk@example.com",
    phone: "+420 123 456 789"
  }
};


function App() {
  return (
    <>
      <Header user="Rostyslav Kokhanchuk" />
      <ContractCard {...mockContractCardProps} />
      <ContractDetailsCard {...mockContractDetailsProps} />
    </>
  )
}

export default App
