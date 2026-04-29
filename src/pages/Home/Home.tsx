import {
  Box,
  Heading,
  HStack,
  Image,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react';
import agriCoolImage from '@/assets/agricool_logo.svg';
import Button from '@/components/ui/button';
import LayoutContainer from '@/components/ui/layourContainer';
import Footer from '@/components/local/Footer';
import PromoCard from './components/PromoCard';
import PricingCard from './components/PricingCard';
import { useAuth } from '@/context/AuthProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/dashboard');
    }
  }, []);

  const { onToggleLogin } = useAuth().loginControls;
  return (
    <>
      <VStack width={'100%'} height={'100%'}>
        <Box flexGrow={1} py={20} width={'100%'}>
          <VStack rowGap={10} alignItems={'stretch'}>
            <LayoutContainer>
              <VStack gap={6} align={'center'} width={'100%'}>
                <HStack justifyContent={'center'} width={'100%'}>
                  <Image src={agriCoolImage} maxW="140px" maxH={'120px'} />
                  <Heading size="6xl">AgriCool</Heading>
                </HStack>
                <Text>
                  Where <strong>Agriculture</strong> Meets Innovation
                </Text>
                <HStack>
                  <Button w="120px" size={'xl'} onClick={onToggleLogin}>
                    <Text textStyle="lg" color="white">
                      Log In
                    </Text>
                  </Button>
                  <Button w="120px" size={'xl'} variant="secondary">
                    <Text textStyle="lg">Sign Up</Text>
                  </Button>
                </HStack>
              </VStack>
            </LayoutContainer>
            <Separator color={'green'} />
            <LayoutContainer>
              <HStack justify={'space-between'}>
                <VStack maxW={'2xl'} py={20} alignItems={'start'} rowGap={4}>
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    color={'text.brand'}
                  >
                    What is AgriCool
                  </Text>

                  <Heading size="3xl">
                    A Digital Farm Assistant that turns your plants into a game.
                  </Heading>

                  <Text>
                    AgriCool helps Filipino farmers, Plant-titos and Plant-titas
                    track crops, get smart reminders, and sell directly to
                    neighbors — all from one clean, simple dashboard.
                  </Text>
                </VStack>
                <PromoCard />
              </HStack>
            </LayoutContainer>
            <Separator color={'green'} />
            <LayoutContainer>
              <HStack justify={'space-between'}>
                <VStack maxW={'2xl'} py={20} alignItems={'start'} rowGap={4}>
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    color={'text.brand'}
                  >
                    why we built it
                  </Text>

                  <Heading size="3xl">
                    Farming is hard. It shouldn’t feel confusing.
                  </Heading>

                  <Text>
                    Missed watering, unpredictable weather, and low margins make
                    farming stressful—especially for small growers. AgriCool
                    simplifies the chaos. Track your plants, get timely
                    reminders, and sell directly to your community—all in one
                    place.
                  </Text>
                  <Box as="ul">
                    <Box as="li" display="flex" alignItems="center" gap="8px">
                      <span>🌱</span>
                      <span>Track every plant like a progress bar</span>
                    </Box>

                    <Box as="li" display="flex" alignItems="center" gap="8px">
                      <span>⛅</span>
                      <span>Smart weather + watering alerts</span>
                    </Box>

                    <Box as="li" display="flex" alignItems="center" gap="8px">
                      <span>🛒</span>
                      <span>Sell directly — no middlemen</span>
                    </Box>

                    <Box as="li" display="flex" alignItems="center" gap="8px">
                      <span>💸</span>
                      <span>Keep more profit with flat fees</span>
                    </Box>
                  </Box>
                </VStack>
                <PricingCard />
              </HStack>
            </LayoutContainer>
          </VStack>
        </Box>
        <Box width={'100%'} py={2}>
          <Separator color={'green'} />
          <Footer />
        </Box>
      </VStack>
    </>
  );
};

export default Home;
