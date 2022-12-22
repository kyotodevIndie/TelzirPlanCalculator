import {
  Button,
  Heading,
  FormControl,
  Select,
  FormLabel,
  Input,
  Text,
  Flex,
  HStack
} from '@chakra-ui/react';
import { useCalculatorValues } from '../../../Contexts/CalculatorContext';
import SelectCalculator from '../../Atoms/SelectCalculator';
import CurrencyLabel from '../../Atoms/CurrencyLabel';
import HistoricDrawer from '../HistoricDrawer';
import InputCalculator from '../../Atoms/InputCalculator';

function PlanCalculatorForm() {
  const {
    result,
    setOriginDDD,
    setDestinyDDD,
    setCallTime,
    setPlanType,
    calculateCallTax,
    handleUpdateAvaiablesDestinationsDDD,
    avaiablesDestinationsDDD
  } = useCalculatorValues();
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCallTax();
  };

  const handleChooseOriginDDD = (origin) => {
    setOriginDDD(origin);
    handleUpdateAvaiablesDestinationsDDD(origin);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Flex flexDirection="column">
        <HStack justify="space-between">
          <Heading>Calculadora de ligações</Heading>
          <HistoricDrawer />
        </HStack>

        <Text mb="10">Calcule o valor de suas ligações</Text>

        <HStack spacing="24px">
          <SelectCalculator
            label="DDD de origem"
            placeholder="Selecione seu DDD de origem"
            onChange={(e) => handleChooseOriginDDD(parseInt(e.target.value, 10))}
            isRequired
            options={
              <>
                <option value="11">11</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
              </>
            }
          />

          <SelectCalculator
            label="DDD de destino"
            placeholder="Selecione seu DDD de destino"
            onChange={(e) => setDestinyDDD(parseInt(e.target.value, 10))}
            isRequired
            options={
              avaiablesDestinationsDDD.length !== 0 &&
              avaiablesDestinationsDDD[0].destinations.map((item) => (
                <option key={item.destiny} value={item.destiny}>
                  {item.destiny}
                </option>
              ))
            }
          />
        </HStack>

        <HStack spacing="24px" mt={5}>
          <InputCalculator
            label="Tempo da ligação"
            placeholder="Ex: 80"
            onChange={(e) => setCallTime(parseInt(e.target.value, 10))}
            type="number"
            isRequired
          />

          <SelectCalculator
            label="Tipo de Plano"
            placeholder="Selecione seu plano"
            onChange={(e) => setPlanType(parseInt(e.target.value, 10))}
            isRequired
            options={
              <>
                <option value="30">FaleMais 30</option>
                <option value="60">FaleMais 60</option>
                <option value="120">FaleMais 120</option>
              </>
            }
          />
        </HStack>

        <Button size="lg" my="10" type="submit" bg="primary" color="background">
          Calcular
        </Button>

        {Object.keys(result).length !== 0 && (
          <HStack justify="space-between">
            <CurrencyLabel currency={result.withPlan} withPlan />
            <CurrencyLabel currency={result.withoutPlan} />
          </HStack>
        )}
      </Flex>
    </form>
  );
}

export default PlanCalculatorForm;
