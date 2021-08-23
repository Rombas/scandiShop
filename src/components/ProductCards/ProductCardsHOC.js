import { graphql } from 'react-apollo';
import ProductCards from './ProductCards';
import { productCardsQuery } from './queries';

const withGraphQL = graphql(productCardsQuery, {
    options: ({ category = {"title": ""} }) => ({
      variables: { category },
    }),
  });

  export default withGraphQL(ProductCards);