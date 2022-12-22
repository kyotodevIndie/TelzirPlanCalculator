import { Box, Text, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import FormatCurrency from '../../../Helpers/FormatCurrency/FormatCurrency';

function CurrencyLabel({ currency, withPlan }) {
  return (
    <Box>
      <Text>Custo {withPlan === true ? 'COM' : 'SEM'} o plano:</Text>
      <Flex align="center" justify="center" w="100%" height={20}>
        <Text color={withPlan ? 'primary' : 'red.700'} as="b" fontSize="20px">
          {FormatCurrency(currency)}
        </Text>
      </Flex>
    </Box>
  );
}

CurrencyLabel.propTypes = {
  currency: PropTypes.string,
  withPlan: PropTypes.bool
};

CurrencyLabel.defaultProps = {
  currency: '50.00',
  withPlan: false
};

export default CurrencyLabel;
