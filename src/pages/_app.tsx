import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apolloClient";
import { Header } from "@/components/headers";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient()}>
      <Header/>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
