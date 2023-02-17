import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.9.3/dist/leaflet.css'
          integrity='sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI='
          crossorigin=''
        />
      </body>
    </Html>
  );
}
