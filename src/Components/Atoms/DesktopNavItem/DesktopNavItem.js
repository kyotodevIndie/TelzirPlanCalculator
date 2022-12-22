import { Box, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function DesktopNavItem({ label, href }) {
  return (
    <Box>
      <Link
        p={2}
        href={href ?? '#'}
        fontSize="sm"
        fontWeight={500}
        _hover={{
          color: 'primary',
          textDecoration: 'underline'
        }}
      >
        {label}
      </Link>
    </Box>
  );
}

DesktopNavItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string
};

DesktopNavItem.defaultProps = {
  label: 'Link',
  href: '#'
};

export default DesktopNavItem;
