import {
  Avatar,
  Box,
  HStack,
  Heading,
  IconButton,
  Image,
  Menu,
  Portal,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import LayoutContainer from '../ui/layourContainer';
import agriCoolImage from '@/assets/agricool_logo.svg';
import Button from '../ui/button';
import { useAuth } from '@/context/AuthProvider';
import { LuBook, LuStore } from 'react-icons/lu';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconType } from 'react-icons';

type MenuItem = {
  label: string;
  path: string;
  icon: IconType;
};

const menuItems: MenuItem[] = [
  {
    label: 'Marketplace',
    path: '/dashboard/marketplace',
    icon: LuStore,
  },
  {
    label: 'Almanac',
    path: '/dashboard/almanac',
    icon: LuBook,
  },
];

const MenuButton = (props: MenuItem) => {
  const { path, label, icon: Icon } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <IconButton
          aria-label={label}
          size="lg"
          rounded="full"
          bg={isActive ? 'green.600' : 'transparent'}
          color={isActive ? 'white' : 'gray.400'}
          _hover={{ bg: isActive ? 'green.500' : 'whiteAlpha.400' }}
          onClick={() => navigate(path)}
        >
          <Icon size={24} />
        </IconButton>
      </Tooltip.Trigger>

      <Tooltip.Positioner>
        <Tooltip.Content>{label}</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};

const TopBar = () => {
  const { isAuth, logout, loginControls } = useAuth();
  const { onToggleLogin } = loginControls;

  const topBarControls = isAuth ? (
    <HStack justify={'center'} flexGrow={1}>
      <HStack flexGrow={1} justify={'center'}>
        {menuItems.map((menu, idx) => (
          <MenuButton
            key={idx}
            label={menu.label}
            icon={menu.icon}
            path={menu.path}
          />
        ))}
      </HStack>
      <Menu.Root positioning={{ placement: 'bottom-end' }}>
        <Menu.Trigger rounded="full" focusRing="outside" cursor={'pointer'}>
          <Avatar.Root size="sm">
            <Avatar.Fallback name="Agricool User" />
          </Avatar.Root>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {/* <Menu.Item value="account">Account</Menu.Item>
            <Menu.Item value="settings">Settings</Menu.Item> */}
              <Menu.Item cursor={'pointer'} value="logout" onClick={logout}>
                Logout
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </HStack>
  ) : (
    <HStack>
      <Button size={'sm'} onClick={onToggleLogin}>
        <Text textStyle="sm" color="white">
          Log In
        </Text>
      </Button>
      <Button size={'sm'} variant="secondary">
        <Text textStyle="sm">Sign Up</Text>
      </Button>
    </HStack>
  );

  return (
    <Box bg={isAuth ? 'bg.secondary' : 'inherit'}>
      <LayoutContainer>
        <HStack justify={isAuth ? 'flex-start' : 'space-between'}>
          <HStack alignItems={'flex-end'} py="20px">
            <Image src={agriCoolImage} width="20px" />
            <Heading size="xl" color={isAuth ? 'white' : 'inherit'}>
              AgriCool
            </Heading>
          </HStack>
          {topBarControls}
        </HStack>
      </LayoutContainer>
    </Box>
  );
};

export default TopBar;
