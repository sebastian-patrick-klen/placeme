import Layout from '@/components/Layout/Layout';
import { DeleteContextProvider } from '@/store/delete-context';
import { ModalContextProvider } from '@/store/modal-context';
import { PositionContextProvider } from '@/store/position-context';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <PositionContextProvider>
        <DeleteContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DeleteContextProvider>
      </PositionContextProvider>
    </ModalContextProvider>
  );
}
