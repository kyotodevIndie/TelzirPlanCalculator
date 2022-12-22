import { Flex, Text, Stack, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function MobileNavItem({ label, href }) {
  return (
    <Stack spacing={4}>
      <Flex py={2} as={Link} href={href ?? '#'} justify="space-between" align="center">
        <Text
          _hover={{
            color: 'primary',
            textDecoration: 'underline'
          }}
          fontWeight={600}
          color="gray.200"
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
}

MobileNavItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string
};

MobileNavItem.defaultProps = {
  label: 'Link',
  href: '#'
};

export default MobileNavItem;
