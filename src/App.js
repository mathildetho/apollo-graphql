import './App.css';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import ExchangeRates from './components/ExchangeRates';

function App() {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });
  
  client
    .query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `
    })
    .then(result => console.log(result));
  return (
    <ApolloProvider client={client} >
      <div>
        <h2>My first Apollo app</h2>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
}

export default App;
