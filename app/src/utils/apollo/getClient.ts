import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { GetServerSidePropsContext } from 'next';

const getClient = (ctx: GetServerSidePropsContext | null) => {
  const setCookieLink = new ApolloLink((operation, forward) => forward(operation).map((data) => {
    ctx?.res.setHeader('set-cookie', operation.getContext().response.headers.get('set-cookie') || '');
    return data;
  }));

  const httpLink = new HttpLink({
    uri: 'http://api:3000/graphql',
    headers: ctx?.req.headers,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([setCookieLink, httpLink]),
    ssrMode: true,
  });
};

export default getClient;
