import { GraphQLResolveInfo } from "graphql";
import { FindManyProperty_RequestArgs } from "./args/FindManyProperty_RequestArgs";
import { Property_Request } from "../../../models/Property_Request";
export declare class FindManyProperty_RequestResolver {
    property_Requests(ctx: any, info: GraphQLResolveInfo, args: FindManyProperty_RequestArgs): Promise<Property_Request[]>;
}
