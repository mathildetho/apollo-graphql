import './App.css';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import Launches from './components/Launches';

function App() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
  });
  
  return (
    <ApolloProvider client={client}>
      <div>
        <h1 className='title'>Launches Apollo</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
