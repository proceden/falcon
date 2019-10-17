import React from 'react';
import { ApolloError } from 'apollo-client';
import { apolloErrorToErrorModelList } from '@deity/falcon-data';
import { ErrorSummary } from './ErrorSummary';

export type OperationErrorProps = ApolloError;
export const OperationError: React.SFC<OperationErrorProps> = props => {
  const errors = apolloErrorToErrorModelList(props);

  if (!errors.length) {
    return null;
  }

  // TODO: probably we need to better analyse `errors`
  // in order to show errors like "disconnected from falcon-server" in ErrorBoundary

  return <ErrorSummary errors={errors} />;
};
