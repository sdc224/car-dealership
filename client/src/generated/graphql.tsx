import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getAllCars: Array<Car>;
  me?: Maybe<User>;
};

export type Car = {
  __typename?: 'Car';
  company: Scalars['String'];
  description: Scalars['String'];
  features: Scalars['String'];
  id: Scalars['Int'];
  mileage: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Float'];
  speed: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  city: Scalars['String'];
  country: Scalars['String'];
  dateOfBirth: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  postCode: Scalars['String'];
  streetAddress: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  calculateTotalOverweight: Scalars['Float'];
  createCar: Scalars['Boolean'];
  createPerson: Scalars['Boolean'];
  destroyAccount: Scalars['Boolean'];
  login: LoginResponse;
  logout: Scalars['Boolean'];
  register: Scalars['Boolean'];
  revokeRefreshTokensForUser: Scalars['Boolean'];
  updatePassword: Scalars['Boolean'];
};


export type MutationCreateCarArgs = {
  company: Scalars['String'];
  description: Scalars['String'];
  features: Scalars['String'];
  mileage: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Float'];
  speed: Scalars['Float'];
};


export type MutationCreatePersonArgs = {
  gender: Scalars['String'];
  heightCm: Scalars['Float'];
  weightKg: Scalars['Float'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  dateOfBirth: Scalars['String'];
  email: Scalars['String'];
  firsName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  postCode: Scalars['String'];
  streetAddress: Scalars['String'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int'];
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Person = {
  __typename?: 'Person';
  bmi: Scalars['Float'];
  bmiCategory: Scalars['Float'];
  gender: Scalars['String'];
  healthRisk: Scalars['Float'];
  heightCm: Scalars['Float'];
  id: Scalars['Int'];
  weightKg: Scalars['Float'];
};

export type CarsQueryVariables = Exact<{ [key: string]: never; }>;


export type CarsQuery = { __typename?: 'Query', getAllCars: Array<{ __typename?: 'Car', id: number, name: string, company: string, description: string, price: number, features: string, speed: number, mileage: number }> };

export type CreateCarMutationVariables = Exact<{
  name: Scalars['String'];
  company: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  features: Scalars['String'];
  speed: Scalars['Float'];
  mileage: Scalars['Float'];
}>;


export type CreateCarMutation = { __typename?: 'Mutation', createCar: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, dateOfBirth: string, streetAddress: string, postCode: string, city: string, country: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, dateOfBirth: string, streetAddress: string, postCode: string, city: string, country: string } | null | undefined };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  dateOfBirth: Scalars['String'];
  streetAddress: Scalars['String'];
  postCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: boolean };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Car: ResolverTypeWrapper<Car>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  User: ResolverTypeWrapper<User>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Person: ResolverTypeWrapper<Person>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Car: Car;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  User: User;
  Mutation: {};
  Boolean: Scalars['Boolean'];
  LoginResponse: LoginResponse;
  Person: Person;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllCars?: Resolver<Array<ResolversTypes['Car']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type CarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Car'] = ResolversParentTypes['Car']> = {
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  features?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mileage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  speed?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  calculateTotalOverweight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createCar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateCarArgs, 'company' | 'description' | 'features' | 'mileage' | 'name' | 'price' | 'speed'>>;
  createPerson?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreatePersonArgs, 'gender' | 'heightCm' | 'weightKg'>>;
  destroyAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  login?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  register?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'city' | 'country' | 'dateOfBirth' | 'email' | 'firsName' | 'lastName' | 'password' | 'postCode' | 'streetAddress'>>;
  revokeRefreshTokensForUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRevokeRefreshTokensForUserArgs, 'userId'>>;
  updatePassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdatePasswordArgs, 'newPassword' | 'oldPassword'>>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  bmi?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  bmiCategory?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  healthRisk?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  heightCm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  weightKg?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Car?: CarResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
};



export const CarsDocument = gql`
    query Cars {
  getAllCars {
    id
    name
    company
    description
    price
    features
    speed
    mileage
  }
}
    `;

/**
 * __useCarsQuery__
 *
 * To run a query within a React component, call `useCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCarsQuery(baseOptions?: Apollo.QueryHookOptions<CarsQuery, CarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarsQuery, CarsQueryVariables>(CarsDocument, options);
      }
export function useCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarsQuery, CarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarsQuery, CarsQueryVariables>(CarsDocument, options);
        }
export type CarsQueryHookResult = ReturnType<typeof useCarsQuery>;
export type CarsLazyQueryHookResult = ReturnType<typeof useCarsLazyQuery>;
export type CarsQueryResult = Apollo.QueryResult<CarsQuery, CarsQueryVariables>;
export const CreateCarDocument = gql`
    mutation CreateCar($name: String!, $company: String!, $description: String!, $price: Float!, $features: String!, $speed: Float!, $mileage: Float!) {
  createCar(name: $name, company: $company, description: $description, price: $price, features: $features, speed: $speed, mileage: $mileage)
}
    `;
export type CreateCarMutationFn = Apollo.MutationFunction<CreateCarMutation, CreateCarMutationVariables>;

/**
 * __useCreateCarMutation__
 *
 * To run a mutation, you first call `useCreateCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCarMutation, { data, loading, error }] = useCreateCarMutation({
 *   variables: {
 *      name: // value for 'name'
 *      company: // value for 'company'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      features: // value for 'features'
 *      speed: // value for 'speed'
 *      mileage: // value for 'mileage'
 *   },
 * });
 */
export function useCreateCarMutation(baseOptions?: Apollo.MutationHookOptions<CreateCarMutation, CreateCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCarMutation, CreateCarMutationVariables>(CreateCarDocument, options);
      }
export type CreateCarMutationHookResult = ReturnType<typeof useCreateCarMutation>;
export type CreateCarMutationResult = Apollo.MutationResult<CreateCarMutation>;
export type CreateCarMutationOptions = Apollo.BaseMutationOptions<CreateCarMutation, CreateCarMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      id
      email
      firstName
      lastName
      dateOfBirth
      streetAddress
      postCode
      city
      country
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
 *      email: // value for 'email'
 *      password: // value for 'password'
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
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    firstName
    lastName
    dateOfBirth
    streetAddress
    postCode
    city
    country
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $firstName: String!, $lastName: String!, $dateOfBirth: String!, $streetAddress: String!, $postCode: String!, $city: String!, $country: String!) {
  register(email: $email, password: $password, firsName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth, streetAddress: $streetAddress, postCode: $postCode, city: $city, country: $country)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

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
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      dateOfBirth: // value for 'dateOfBirth'
 *      streetAddress: // value for 'streetAddress'
 *      postCode: // value for 'postCode'
 *      city: // value for 'city'
 *      country: // value for 'country'
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