import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route
      exact
      path={`${match.path}`}
      component={CollectionsOverviewContainer}
    />
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionContainer}
    />
  </div>
);

export default ShopPage;
