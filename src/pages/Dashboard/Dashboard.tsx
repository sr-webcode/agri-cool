import LayoutContainer from '@/components/ui/layourContainer';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <LayoutContainer size='lg'>
      <Outlet />
    </LayoutContainer>
  );
};

export default Dashboard;
