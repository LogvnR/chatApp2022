/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Message: { // root type
    message?: string | null; // String
    sender?: string | null; // String
  }
  Mutation: {};
  Query: {};
  Subscription: {};
  Typing: { // root type
    isTyping: boolean; // Boolean!
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Message: { // field return type
    message: string | null; // String
    sender: string | null; // String
  }
  Mutation: { // field return type
    IsTypingMutation: NexusGenRootTypes['Typing']; // Typing!
    SendMessage: boolean; // Boolean!
  }
  Query: { // field return type
    ok: boolean; // Boolean!
  }
  Subscription: { // field return type
    IsTypingSubscription: NexusGenRootTypes['Typing'] | null; // Typing
    MessageSubscription: Array<NexusGenRootTypes['Message'] | null> | null; // [Message]
  }
  Typing: { // field return type
    isTyping: boolean; // Boolean!
    username: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Message: { // field return type name
    message: 'String'
    sender: 'String'
  }
  Mutation: { // field return type name
    IsTypingMutation: 'Typing'
    SendMessage: 'Boolean'
  }
  Query: { // field return type name
    ok: 'Boolean'
  }
  Subscription: { // field return type name
    IsTypingSubscription: 'Typing'
    MessageSubscription: 'Message'
  }
  Typing: { // field return type name
    isTyping: 'Boolean'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    IsTypingMutation: { // args
      isTyping: boolean; // Boolean!
      username: string; // String!
    }
    SendMessage: { // args
      message: string; // String!
      username: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}