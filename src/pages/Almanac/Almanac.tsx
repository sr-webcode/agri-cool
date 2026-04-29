import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  Drawer,
  Portal,
  Heading,
  CloseButton,
  useDisclosure,
  HStack,
  Badge,
  Status,
  Separator,
} from '@chakra-ui/react';
import { ALMANAC_CROPS } from './data';
import AlmanacCard from './components/AlmanacCard';
import { useState } from 'react';
import { AlmanacCrop as AlmanacDetails } from './data';
import SeasonBar from './components/SeasonBar';

type PlantProcessDetail = {
  title: string;
  description: string;
};

const PlantProcessDetail = (detail: PlantProcessDetail) => {
  const { title, description } = detail;
  return (
    <VStack
      align={'start'}
      bg={'bg.secondary'}
      rounded={'lg'}
      gap={0}
      py={2}
      px={3}
      width={150}
    >
      <Text textTransform={'uppercase'} color="whiteAlpha.700" textStyle={'xs'}>
        {title}
      </Text>
      <Text color="white" textStyle={'sm'}>
        {description}
      </Text>
    </VStack>
  );
};

const AlmanacExtractedInfo = ({ details }: { details: AlmanacDetails }) => {
  const {
    name,
    emoji,
    sci,
    catLabel,
    price,
    harvest,
    planted,
    yield: plantYield,
    water,
    tips,
    season,
  } = details;

  return (
    <VStack align={'start'} py={10} gap={4}>
      <HStack spaceX={2}>
        <Text textStyle={'4xl'}>{emoji}</Text>
        <VStack align={'start'} gap={0}>
          <Text textStyle={'2xl'}>{name}</Text>
          <Text textStyle={'sm'} mb={1}>
            {sci} · {catLabel}
          </Text>
          <Badge bg="bg.primary" color={'white'} px={2}>
            {price}
          </Badge>
        </VStack>
      </HStack>
      <HStack>
        <PlantProcessDetail title="Harvest Time" description={harvest} />
        <PlantProcessDetail title="Best planted" description={planted} />
        <PlantProcessDetail title="Yield per sqm" description={plantYield} />
        <PlantProcessDetail title="Water needs" description={water} />
      </HStack>
      <SeasonBar season={season} />

      <Box as="ul" width={"100%"}>
        {tips.map((tip, idx) => {
          const isLastTip = idx === tips.length - 1;
          return (
            <Box key={idx}>
              <Box
                as="li"
                display="flex"
                alignItems="center"
                gap="8px"
                py="8px"
              >
                <Status.Root colorPalette="green">
                  <Status.Indicator />
                </Status.Root>
                <span>{tip}</span>
              </Box>
              {!isLastTip && <Separator />}
            </Box>
          );
        })}
      </Box>
    </VStack>
  );
};

const Almanac = () => {
  const { onClose, onOpen, open } = useDisclosure();
  const [details, setDetails] = useState<AlmanacDetails | null>(null);

  const handleViewAlmanac = (details: AlmanacDetails) => {
    onOpen();
    setDetails(details);
  };

  return (
    <>
      <VStack align={'flex-start'} py="10" width={'100%'} gap={8}>
        <Box maxW={'lg'}>
          <Heading size={'4xl'}>Almanac</Heading>
          <Text textStyle={'sm'}>
            A quick reference for common crops grown around your area — seasons,
            care tips, and what to expect at market.
          </Text>
        </Box>
        <Flex flexWrap="wrap" gap="18px">
          {ALMANAC_CROPS.map((al) => (
            <AlmanacCard onClick={handleViewAlmanac} key={al.id} almanac={al} />
          ))}
        </Flex>
      </VStack>

      {/* modal viewer */}
      <Drawer.Root size={'lg'} open={open} onInteractOutside={onClose}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Body>
                {details && <AlmanacExtractedInfo details={details} />}
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" onClick={onClose} />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
};

export default Almanac;
