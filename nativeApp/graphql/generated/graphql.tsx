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
  IsTypingMutation: Typing;
  SendMessage: Scalars['Boolean'];
};


export type MutationIsTypingMutationArgs = {
  isTyping: Scalars['Boolean'];
  username: Scalars['String'];
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
  IsTypingSubscription?: Maybe<Typing>;
  MessageSubscription?: Maybe<Array<Maybe<Message>>>;
};

export type Typing = {
  __typename?: 'Typing';
  isTyping: Scalars['Boolean'];
  username: Scalars['String'];
};

export type SendMessageMutationVariables = Exact<{
  username: Scalars['String'];
  message: Scalars['String'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', SendMessage: boolean };

export type MessagesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessagesSubscription = { __typename?: 'Subscription', MessageSubscription?: Array<{ __typename?: 'Message', sender?: string | null, message?: string | null } | null> | null };


export const SendMessageDocument = gql`
    mutation SendMessage($username: String!, $message: String!) {
  SendMessage(username: $username, message: $message)
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      username: // value for 'username'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const MessagesDocument = gql`
    subscription Messages {
  MessageSubscription {
    sender
    message
  }
}
    `;

/**
 * __useMessagesSubscription__
 *
 * To run a query within a React component, call `useMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessagesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessagesSubscription, MessagesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessagesSubscription, MessagesSubscriptionVariables>(MessagesDocument, options);
      }
export type MessagesSubscriptionHookResult = ReturnType<typeof useMessagesSubscription>;
export type MessagesSubscriptionResult = Apollo.SubscriptionResult<MessagesSubscription>;