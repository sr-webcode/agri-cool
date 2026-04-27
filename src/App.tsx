import { Provider } from '@/components/ui/provider';

import Login from './pages/Login';
import { Button, HStack } from '@chakra-ui/react';

function App() {
  return (
    <div>
      <Provider>
        <HStack>
          <Button>Click me</Button>
          <Button>Click me</Button>
        </HStack>
      </Provider>
    </div>
  );
}

export default App;
