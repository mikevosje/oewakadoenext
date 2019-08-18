// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  
  render() {
    return (
      <Html>
        <Head>
          <link href="/static/bootstrap.min.css" rel="stylesheet"/>
          <script async defer src="https://connect.facebook.net/en_US/sdk.js"/>
        </Head>
        <body>
        <Header />
        <Navigation />
        <Main/>
        <NextScript/>
        <Footer/>
        </body>
        
        <style jsx global>
          {`
              * {
                  -webkit-font-smoothing: antialiased;
                  font-smoothing: antialiased;
              }

              @font-face {
                  font-family: 'cantarellregular';
                  src: url('/static/fonts/Cantarell-Regular-webfont.eot');
                  src: url('/static/fonts/Cantarell-Regular-webfont.eot?#iefix') format('embedded-opentype'),
                  url('/static/fonts/Cantarell-Regular-webfont.woff') format('woff'),
                  url('/static/fonts/Cantarell-Regular-webfont.ttf') format('truetype'),
                  url('/static/fonts/Cantarell-Regular-webfont.svg#cantarellregular') format('svg');
                  font-weight: normal;
                  font-style: normal;
              }

              html {
                  width: 100%;
                  height: 100%;
                  margin: 0;
                  padding: 0;
                  cursor: default;
                  line-height: 140%;
              }

              body {
                  font-size: 12px;
                  border: 0;
                  line-height: 120%;
                  color: #000;
                  height: 100%;
                  padding: 0;
                  overflow: auto;
                  font-family: 'cantarellregular';
              }

              h1, h2, h3, h4, h5, h6, p {
                  line-height: 120%;
                  font-style: normal;
                  margin: 0;
                  padding: 0;
              }

              h1 {
                  margin-bottom: 10px;
                  color: #c41215;
                  font-size: 22px;
              }

              p, li, a {
                  line-height: 150%;
                  font-size: 14px;
                  overflow: auto;
              }

              #wrapper {
                  overflow: auto;
                  display: block;
                  margin-top: 20px;
                  margin-bottom: 20px;
              }
          `}
        
        
        </style>
      </Html>
    )
  }
}

export default MyDocument
