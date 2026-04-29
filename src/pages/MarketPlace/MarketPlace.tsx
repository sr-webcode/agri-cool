import Button from '@/components/ui/button';
import {
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { DUMMY_CROPS } from './data';
import { LuSearch } from 'react-icons/lu';
import CropCard from './components/CropCard';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import AddCropsForm from './components/AddCropsForm';

const MarketPlace = () => {
  const [searchCrops, setSearchCrops] = useState<string>('');
  const [cropsList, setCropsList] = useState<any[]>(DUMMY_CROPS);
  const [filteredCrops, setfilteredCrops] = useState<any[]>([]);
  const { onOpen, open, onClose } = useDisclosure();

  const debouncedSearch = useDebounce(searchCrops, 300);

  useEffect(() => {
    const filtered = cropsList.filter((crop) =>
      crop.name.toLowerCase().includes(debouncedSearch?.toLowerCase())
    );
    setfilteredCrops(filtered);
  }, [debouncedSearch]);

  const handleAddCropsForm = (newCrop: any) => {
    setSearchCrops('');
    const newData = [...cropsList, newCrop];
    setCropsList(newData);
    setfilteredCrops(newData);
  };

  return (
    <>
      <VStack align={'flex-start'} py="10" width={'100%'} gap={6}>
        <HStack width={'100%'} justifyContent={'space-between'} align={'start'}>
          <VStack align={'flex-start'} gap={4}>
            <VStack align={'flex-start'} gap={1}>
              <Text
                fontWeight={'bold'}
                color={'text.brand'}
                textTransform={'uppercase'}
              >
                Hyper-local marketplace
              </Text>
              <Heading size={'4xl'}>Buy & sell with neighbors</Heading>
              <Text textStyle={'sm'}>
                Flat ₱20 listing fee · No middleman · Face-to-face meetups
              </Text>
            </VStack>
          </VStack>
          <Button onClick={onOpen}>Add Crop Listing</Button>
        </HStack>
        <InputGroup startElement={<LuSearch size={20} />}>
          <Input
            rounded={'xl'}
            size={'xl'}
            color="text.primary"
            type="text"
            placeholder="Search for crops..."
            onChange={(e) => setSearchCrops(e.target.value)}
          />
        </InputGroup>
        <Flex flexWrap="wrap" gap="12px">
          {filteredCrops.map((crop) => (
            <CropCard key={crop.name} crop={crop} />
          ))}
        </Flex>
      </VStack>
      <AddCropsForm
        isOpen={open}
        onClose={onClose}
        onSubmit={handleAddCropsForm}
      />
    </>
  );
};

export default MarketPlace;
