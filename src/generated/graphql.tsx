import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  user: User;
  userId: Scalars['ID'];
};

export type CreateTweetInput = {
  body: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateTweetResponse = {
  __typename?: 'CreateTweetResponse';
  errors: Array<Error>;
  ok: Scalars['Boolean'];
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String'];
  path: Scalars['String'];
};

export type Follow = {
  __typename?: 'Follow';
  createdAt: Scalars['String'];
  followedId: Scalars['ID'];
  followerId: Scalars['ID'];
  id: Scalars['ID'];
};

export type FollowInput = {
  followingId: Scalars['ID'];
};

export type FollowResponse = {
  __typename?: 'FollowResponse';
  errors: Array<Error>;
  ok: Scalars['Boolean'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CreateCommentResponse;
  createTweet: CreateTweetResponse;
  follow: FollowResponse;
  login: LoginResponse;
  register: RegisterResponse;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateTweetArgs = {
  input: CreateTweetInput;
};


export type MutationFollowArgs = {
  input: FollowInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type Query = {
  __typename?: 'Query';
  allComments: Array<Comment>;
  allTweets: Array<Tweet>;
  allUsers: Array<User>;
  getTweet: Tweet;
  getUser: User;
  isFollowedBy: Array<Follow>;
  lastestTweets: Array<Tweet>;
  me?: Maybe<User>;
};


export type QueryAllCommentsArgs = {
  tweetId: Scalars['ID'];
};


export type QueryGetTweetArgs = {
  tweetId: Scalars['ID'];
};


export type QueryGetUserArgs = {
  userId: Scalars['ID'];
};


export type QueryLastestTweetsArgs = {
  userId: Scalars['ID'];
};

export type RegisterInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  errors: Array<Error>;
  ok: Scalars['Boolean'];
};

export type Tweet = {
  __typename?: 'Tweet';
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  user: User;
  userId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  displayName: Scalars['String'];
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type CreateCommentInput = {
  body: Scalars['String'];
  tweetId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type CreateCommentResponse = {
  __typename?: 'createCommentResponse';
  errors: Array<Error>;
  ok: Scalars['Boolean'];
};

export type AllCommentsQueryVariables = Exact<{
  tweetId: Scalars['ID'];
}>;


export type AllCommentsQuery = { __typename?: 'Query', allComments: Array<{ __typename?: 'Comment', id: string, body: string, createdAt: string, user: { __typename?: 'User', id: string, username: string, displayName: string } }> };

export type AllTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTweetsQuery = { __typename?: 'Query', allTweets: Array<{ __typename?: 'Tweet', id: string, body: string, createdAt: string, user: { __typename?: 'User', id: string, displayName: string, username: string } }> };

export type LatestTweetsQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type LatestTweetsQuery = { __typename?: 'Query', lastestTweets: Array<{ __typename?: 'Tweet', id: string, body: string, createdAt: string }> };

export type GetTweetQueryVariables = Exact<{
  tweetId: Scalars['ID'];
}>;


export type GetTweetQuery = { __typename?: 'Query', getTweet: { __typename?: 'Tweet', id: string, body: string, createdAt: string, user: { __typename?: 'User', id: string, username: string, displayName: string } } };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, username: string, displayName: string, createdAt: string } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', ok: boolean, errors: Array<{ __typename?: 'Error', path: string, message: string }> } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', user?: Maybe<{ __typename?: 'User', id: string, username: string, bio?: Maybe<string>, displayName: string, createdAt: string }>, errors: Array<{ __typename?: 'Error', path: string, message: string }> } };


export const AllCommentsDocument = gql`
    query AllComments($tweetId: ID!) {
  allComments(tweetId: $tweetId) {
    id
    body
    user {
      id
      username
      displayName
    }
    createdAt
  }
}
    `;
export type AllCommentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllCommentsQuery, AllCommentsQueryVariables>, 'query'> & ({ variables: AllCommentsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AllCommentsComponent = (props: AllCommentsComponentProps) => (
      <ApolloReactComponents.Query<AllCommentsQuery, AllCommentsQueryVariables> query={AllCommentsDocument} {...props} />
    );
    

/**
 * __useAllCommentsQuery__
 *
 * To run a query within a React component, call `useAllCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCommentsQuery({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useAllCommentsQuery(baseOptions: Apollo.QueryHookOptions<AllCommentsQuery, AllCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCommentsQuery, AllCommentsQueryVariables>(AllCommentsDocument, options);
      }
export function useAllCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCommentsQuery, AllCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCommentsQuery, AllCommentsQueryVariables>(AllCommentsDocument, options);
        }
export type AllCommentsQueryHookResult = ReturnType<typeof useAllCommentsQuery>;
export type AllCommentsLazyQueryHookResult = ReturnType<typeof useAllCommentsLazyQuery>;
export type AllCommentsQueryResult = Apollo.QueryResult<AllCommentsQuery, AllCommentsQueryVariables>;
export const AllTweetsDocument = gql`
    query AllTweets {
  allTweets {
    id
    body
    user {
      id
      displayName
      username
    }
    createdAt
  }
}
    `;
export type AllTweetsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTweetsQuery, AllTweetsQueryVariables>, 'query'>;

    export const AllTweetsComponent = (props: AllTweetsComponentProps) => (
      <ApolloReactComponents.Query<AllTweetsQuery, AllTweetsQueryVariables> query={AllTweetsDocument} {...props} />
    );
    

/**
 * __useAllTweetsQuery__
 *
 * To run a query within a React component, call `useAllTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTweetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTweetsQuery(baseOptions?: Apollo.QueryHookOptions<AllTweetsQuery, AllTweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTweetsQuery, AllTweetsQueryVariables>(AllTweetsDocument, options);
      }
export function useAllTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTweetsQuery, AllTweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTweetsQuery, AllTweetsQueryVariables>(AllTweetsDocument, options);
        }
export type AllTweetsQueryHookResult = ReturnType<typeof useAllTweetsQuery>;
export type AllTweetsLazyQueryHookResult = ReturnType<typeof useAllTweetsLazyQuery>;
export type AllTweetsQueryResult = Apollo.QueryResult<AllTweetsQuery, AllTweetsQueryVariables>;
export const LatestTweetsDocument = gql`
    query LatestTweets($userId: ID!) {
  lastestTweets(userId: $userId) {
    id
    body
    createdAt
  }
}
    `;
export type LatestTweetsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LatestTweetsQuery, LatestTweetsQueryVariables>, 'query'> & ({ variables: LatestTweetsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const LatestTweetsComponent = (props: LatestTweetsComponentProps) => (
      <ApolloReactComponents.Query<LatestTweetsQuery, LatestTweetsQueryVariables> query={LatestTweetsDocument} {...props} />
    );
    

/**
 * __useLatestTweetsQuery__
 *
 * To run a query within a React component, call `useLatestTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestTweetsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLatestTweetsQuery(baseOptions: Apollo.QueryHookOptions<LatestTweetsQuery, LatestTweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestTweetsQuery, LatestTweetsQueryVariables>(LatestTweetsDocument, options);
      }
export function useLatestTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestTweetsQuery, LatestTweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestTweetsQuery, LatestTweetsQueryVariables>(LatestTweetsDocument, options);
        }
export type LatestTweetsQueryHookResult = ReturnType<typeof useLatestTweetsQuery>;
export type LatestTweetsLazyQueryHookResult = ReturnType<typeof useLatestTweetsLazyQuery>;
export type LatestTweetsQueryResult = Apollo.QueryResult<LatestTweetsQuery, LatestTweetsQueryVariables>;
export const GetTweetDocument = gql`
    query GetTweet($tweetId: ID!) {
  getTweet(tweetId: $tweetId) {
    id
    body
    user {
      id
      username
      displayName
    }
    createdAt
  }
}
    `;
export type GetTweetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTweetQuery, GetTweetQueryVariables>, 'query'> & ({ variables: GetTweetQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTweetComponent = (props: GetTweetComponentProps) => (
      <ApolloReactComponents.Query<GetTweetQuery, GetTweetQueryVariables> query={GetTweetDocument} {...props} />
    );
    

/**
 * __useGetTweetQuery__
 *
 * To run a query within a React component, call `useGetTweetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetQuery({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useGetTweetQuery(baseOptions: Apollo.QueryHookOptions<GetTweetQuery, GetTweetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetQuery, GetTweetQueryVariables>(GetTweetDocument, options);
      }
export function useGetTweetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetQuery, GetTweetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetQuery, GetTweetQueryVariables>(GetTweetDocument, options);
        }
export type GetTweetQueryHookResult = ReturnType<typeof useGetTweetQuery>;
export type GetTweetLazyQueryHookResult = ReturnType<typeof useGetTweetLazyQuery>;
export type GetTweetQueryResult = Apollo.QueryResult<GetTweetQuery, GetTweetQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($userId: ID!) {
  getUser(userId: $userId) {
    id
    username
    displayName
    createdAt
  }
}
    `;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUserComponent = (props: GetUserComponentProps) => (
      <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    ok
    errors {
      path
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    user {
      id
      username
      bio
      displayName
      createdAt
    }
    errors {
      path
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;