import { Box, Flex, Text } from '@chakra-ui/react';
import { AlmanacCrop as AlmanacDetails } from '../data';

interface AlamanacCardProps {
  almanac: AlmanacDetails;
  onClick: (almanac: AlmanacDetails) => void;
}

const AlmanacCard = ({ onClick, almanac }: AlamanacCardProps) => {
  const { name, catLabel, emoji, bg } = almanac;
  return (
    <Box
      onClick={() => onClick(almanac)}
      flex="0 0 calc(24.444% - 10px)" // 3-column, accounts for gap
      minW="180px"
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.100"
      bg="white"
      cursor="pointer"
      transition="box-shadow 0.15s"
      _hover={{ boxShadow: 'md' }}
    >
      {/* Emoji thumbnail */}
      <Flex h="72px" align="center" justify="center" bg={bg} fontSize="2rem">
        {emoji}
      </Flex>
      <Box bg={'bg.secondary'} p="4">
        <Text color="white">{name}</Text>
        <Text color="whiteAlpha.700" textStyle={'sm'}>
          {catLabel}
        </Text>
      </Box>
    </Box>
  );
};

export default AlmanacCard;
