/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type SchemaVersion = number;
export type Headline = string;
export type JobTitle = string;
export type JobDescriptionExpectsHTML = string;
export type TheRewardSchema = string;
export type HandleOrUsername = string;
export type TheItemsSchema = string;
export type AdditionalRolehiringProcessDetails = TheItemsSchema[];

export interface GenericJoyStreamRoleSchema {
  version: SchemaVersion;
  headline: Headline;
  job: JobSpecifics;
  reward: TheRewardSchema;
  creator: CreatorDetails;
  process?: HiringProcess;
  [k: string]: any;
}
export interface JobSpecifics {
  title: JobTitle;
  description: JobDescriptionExpectsHTML;
  [k: string]: any;
}
export interface CreatorDetails {
  membership: EntryInMembershipModuke;
  [k: string]: any;
}
export interface EntryInMembershipModuke {
  handle: HandleOrUsername;
  [k: string]: any;
}
export interface HiringProcess {
  details: AdditionalRolehiringProcessDetails;
  [k: string]: any;
}