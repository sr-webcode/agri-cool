import { Badge, Box, Flex, HStack, Text } from '@chakra-ui/react';

const CropCard = ({ crop }: { crop: any }) => {
  return (
    <Box
      flex="0 0 calc(33.333% - 10px)" // 3-column, accounts for gap
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
      <Flex
        h="72px"
        align="center"
        justify="center"
        bg={crop.bg}
        fontSize="2rem"
      >
        {crop.emoji}
      </Flex>

      {/* Info */}
      <Box px={3} pt={2} pb={3}>
        <Text fontWeight="600" fontSize="sm" color="gray.800" mb="1px">
          {crop.name}
        </Text>
        <Text fontSize="xs" color="gray.500" mb={1}>
          {crop.meta}
        </Text>
        <HStack gap={1} align="baseline">
          <Text fontWeight="700" fontSize="sm" color="green.600">
            ₱{crop.price}
          </Text>
          <Text fontSize="xs" color="gray.400">
            / {crop.unit}
          </Text>
        </HStack>

        {/* Seller row */}
        <HStack
          mt={2}
          pt={2}
          borderTop="1px solid"
          borderColor="gray.100"
          justify="space-between"
        >
          <HStack gap={1}>
            {/* Avatar */}
            <Flex
              w="20px"
              h="20px"
              borderRadius="full"
              bg={crop.avatarBg}
              color={crop.avatarColor}
              align="center"
              justify="center"
              fontSize="8px"
              fontWeight="600"
              flexShrink={0}
            >
              {crop.initials}
            </Flex>
            <Text fontSize="xs" color="gray.500">
              {crop.seller}
            </Text>
          </HStack>

          <Badge
            fontSize="9px"
            px={2}
            py="2px"
            borderRadius="full"
            bg="#f0fdf4"
            color="#15803d"
            border="1px solid #bbf7d0"
            fontWeight="500"
          >
            {crop.km} km
          </Badge>
        </HStack>
      </Box>
    </Box>
  );
};

export default CropCard;
