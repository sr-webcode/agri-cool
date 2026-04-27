import { Provider } from '@/components/ui/provider';
import { useRoutes } from 'react-router-dom';

import { routes } from './router';

function App() {
  return <Provider> {useRoutes(routes)}</Provider>;
}

export default App;
