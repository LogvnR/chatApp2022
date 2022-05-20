import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  SendMessage: Scalars['Boolean'];
};


export type MutationSendMessageArgs = {
  message: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ok: Scalars['Boolean'];
};

export type Subscription = {
  __typename?: 'Subscription';
  MessageSubscription?: Maybe<Array<Maybe<Message>>>;
};

export type MessageSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageSubscriptionSubscription = { __typename?: 'Subscription', MessageSubscription?: Array<{ __typename?: 'Message', sender?: string | null, message?: string | null } | null> | null };


export const MessageSubscriptionDocument = gql`
    subscription MessageSubscription {
  MessageSubscription {
    sender
    message
  }
}
    `;

/**
 * __useMessageSubscriptionSubscription__
 *
 * To run a query within a React component, call `useMessageSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessageSubscriptionSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessageSubscriptionSubscription, MessageSubscriptionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessageSubscriptionSubscription, MessageSubscriptionSubscriptionVariables>(MessageSubscriptionDocument, options);
      }
export type MessageSubscriptionSubscriptionHookResult = ReturnType<typeof useMessageSubscriptionSubscription>;
export type MessageSubscriptionSubscriptionResult = Apollo.SubscriptionResult<MessageSubscriptionSubscription>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    