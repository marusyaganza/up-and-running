import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Flight = {
  __typename?: 'Flight';
  date: Scalars['String']['output'];
  destination: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCancelled?: Maybe<Scalars['Boolean']['output']>;
  origin: Scalars['String']['output'];
  starship: Scalars['String']['output'];
};

export type FlightInput = {
  date: Scalars['String']['input'];
  destination: Scalars['String']['input'];
  origin: Scalars['String']['input'];
  starship: Scalars['String']['input'];
};

export type FlightsFilter = {
  past?: InputMaybe<Scalars['Boolean']['input']>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewFlight: Flight;
  cancelFlight: Flight;
  updateFlight: Flight;
};


export type MutationAddNewFlightArgs = {
  input: FlightInput;
};


export type MutationCancelFlightArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateFlightArgs = {
  id: Scalars['ID']['input'];
  input: UpdateFlightInput;
};

export type Query = {
  __typename?: 'Query';
  flights: Array<Flight>;
  planets: Array<Scalars['String']['output']>;
  starships: Array<Scalars['String']['output']>;
};


export type QueryFlightsArgs = {
  filter?: InputMaybe<FlightsFilter>;
};

export type UpdateFlightInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  destination?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  starship?: InputMaybe<Scalars['String']['input']>;
};



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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Flight: ResolverTypeWrapper<Flight>;
  FlightInput: FlightInput;
  FlightsFilter: FlightsFilter;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateFlightInput: UpdateFlightInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Flight: Flight;
  FlightInput: FlightInput;
  FlightsFilter: FlightsFilter;
  ID: Scalars['ID']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  UpdateFlightInput: UpdateFlightInput;
};

export type FlightResolvers<ContextType = any, ParentType extends ResolversParentTypes['Flight'] = ResolversParentTypes['Flight']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  destination?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isCancelled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  starship?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addNewFlight?: Resolver<ResolversTypes['Flight'], ParentType, ContextType, RequireFields<MutationAddNewFlightArgs, 'input'>>;
  cancelFlight?: Resolver<ResolversTypes['Flight'], ParentType, ContextType, RequireFields<MutationCancelFlightArgs, 'id'>>;
  updateFlight?: Resolver<ResolversTypes['Flight'], ParentType, ContextType, RequireFields<MutationUpdateFlightArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  flights?: Resolver<Array<ResolversTypes['Flight']>, ParentType, ContextType, Partial<QueryFlightsArgs>>;
  planets?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  starships?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Flight?: FlightResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

