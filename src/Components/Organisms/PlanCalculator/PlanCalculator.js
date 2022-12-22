import { Flex } from '@chakra-ui/react';
import PlanCalculatorForm from '../../Molecules/PlanCalculatorForm/PlanCalculatorForm';

function PlanCalculator() {
  return (
    <Flex justifyContent="center" alignItems="center" height="80vh" mx="5">
      <PlanCalculatorForm />
    </Flex>
  );
}
export default PlanCalculator;
