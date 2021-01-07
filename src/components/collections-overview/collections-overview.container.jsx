import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data }) => {
      console.log(loading);
      console.log(data);
      if (loading) return <Spinner />;
      const { collections } = data;
      return <CollectionsOverview collections={collections} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
