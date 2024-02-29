import './App.css';
import React from 'react';
import { ApolloProvider, graphql } from 'react-apollo'
import { ApolloClient, gql,InMemoryCache } from '@apollo/client';
import { ChannelsList } from './ChannelsList';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { typeDefs } from './schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from 'graphql-tools';



function App() {


  const schema = makeExecutableSchema({ typeDefs });
  const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });
  addMocksToSchema({ schema });
  const client = new ApolloClient({  link: mockNetworkInterface,
    cache: new InMemoryCache(), });
  const channelListQuery = gql`
  query ChannelListQuery {
    channels { 
      id
      name
    }
  }
  `;
  const ChannelListData = graphql(channelListQuery)(ChannelsList)
  return (
    <ApolloProvider client={client} >
      <div className="App">

        <ChannelListData />

      </div>
    </ApolloProvider>

  );
}

export default App;
