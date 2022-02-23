import { GraphQLResolveInfo } from "graphql";
import { UpsertProperty_RequestArgs } from "./args/UpsertProperty_RequestArgs";
import { Property_Request } from "../../../models/Property_Request";
export declare class UpsertProperty_RequestResolver {
    upsertProperty_Request(ctx: any, info: GraphQLResolveInfo, args: UpsertProperty_RequestArgs): Promise<Property_Request>;
}
