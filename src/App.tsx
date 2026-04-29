import { Provider } from '@/components/ui/provider';
import { useRoutes } from 'react-router-dom';

import { routes } from './router';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <Provider>
      <AuthProvider>{useRoutes(routes)}</AuthProvider>
    </Provider>
  );
}

export default App;
