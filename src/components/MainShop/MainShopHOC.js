import { graphql } from 'react-apollo';
import MainShop from './MainShop';
import { productCardsQuery } from './queries';

const withGraphQL = graphql(productCardsQuery, {
    options: ({ category = {"title": ""} }) => ({
      variables: { category },
    }),
  });

  export default withGraphQL(MainShop);