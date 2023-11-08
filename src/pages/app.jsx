import { Helmet } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AppView } from 'src/sections/overview/view';

export default function AppPage() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <AppView />
    </QueryClientProvider>
      
  );
}
