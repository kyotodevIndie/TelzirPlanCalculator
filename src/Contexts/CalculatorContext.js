import { createContext, useState, useContext, useEffect } from 'react';
import api from '../Services/api';

const CalculatorContext = createContext();

function CalculatorProvider({ children }) {
  const [result, setResult] = useState({});
  const [originDDD, setOriginDDD] = useState(0);
  const [destinyDDD, setDestinyDDD] = useState(0);
  const [callTime, setCallTime] = useState(0);
  const [planType, setPlanType] = useState(0);
  const [historic, setHistoric] = useState([]);
  const [planTaxInfos, setPlanTaxInfos] = useState([]);
  const [avaiablesDestinationsDDD, setavaiablesDestinationsDDD] = useState([]);

  useEffect(() => {
    const getPlanTaxInfos = async () => {
      try {
        const { data } = await api.get('kyotodevindie/fakeApi/data');
        setPlanTaxInfos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPlanTaxInfos();
  }, []);

  const getLocalStorageData = () => {
    const data = JSON.parse(localStorage.getItem('calculationHistory'));
    if (data === null) return [];
    return data.historicInput;
  };

  const calculateCallTax = () => {
    const { destinations } = planTaxInfos.filter((item) => item.origin === originDDD)[0];
    const { TaxPerMinute } = destinations.filter((item) => item.destiny === destinyDDD)[0];

    const withoutPlan = callTime * TaxPerMinute;
    let withPlan = 0;

    if (callTime >= planType) {
      const calc = callTime - planType;
      const porc = TaxPerMinute * (10 / 100) + TaxPerMinute;
      withPlan = calc * porc;
    }

    setResult({ withPlan, withoutPlan });

    const historicInput = [
      ...getLocalStorageData(),
      {
        originDDD,
        destinyDDD,
        callTime,
        planType,
        result: { withPlan, withoutPlan }
      }
    ];
    localStorage.setItem('calculationHistory', JSON.stringify({ historicInput }));
  };

  const handleGetHistoric = () => {
    setHistoric(getLocalStorageData());
  };

  const handleDeleteLocalStoageData = () => {
    localStorage.removeItem('calculationHistory');
    setHistoric([]);
  };

  const handleUpdateAvaiablesDestinationsDDD = (origin) => {
    const PlansFilter = planTaxInfos.filter((item) => item.origin === origin);
    setavaiablesDestinationsDDD(PlansFilter);
  };

  return (
    <CalculatorContext.Provider
      value={{
        result,
        originDDD,
        setOriginDDD,
        setDestinyDDD,
        setCallTime,
        setPlanType,
        calculateCallTax,
        handleGetHistoric,
        historic,
        handleDeleteLocalStoageData,
        avaiablesDestinationsDDD,
        handleUpdateAvaiablesDestinationsDDD
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorProvider;

export function useCalculatorValues() {
  const value = useContext(CalculatorContext);
  const {
    result,
    originDDD,
    setOriginDDD,
    setDestinyDDD,
    setCallTime,
    setPlanType,
    calculateCallTax,
    handleGetHistoric,
    historic,
    handleDeleteLocalStoageData,
    avaiablesDestinationsDDD,
    handleUpdateAvaiablesDestinationsDDD
  } = value;
  return {
    result,
    originDDD,
    setOriginDDD,
    setDestinyDDD,
    setCallTime,
    setPlanType,
    calculateCallTax,
    handleGetHistoric,
    historic,
    handleDeleteLocalStoageData,
    avaiablesDestinationsDDD,
    handleUpdateAvaiablesDestinationsDDD
  };
}
