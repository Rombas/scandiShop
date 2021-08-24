import { graphql } from 'react-apollo';
import Navbar from './Navbar';
import { currenciesQuery } from './queries';

const withGraphQL = graphql(currenciesQuery);
export default withGraphQL(Navbar);