import Layout from '@/components/Layout/Layout';
import { PositionContextProvider } from '@/store/position-context';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <PositionContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PositionContextProvider>
  );
}
