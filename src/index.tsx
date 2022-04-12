import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

const root = createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient()


root.render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
        <App />
      </HelmetProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>
)
