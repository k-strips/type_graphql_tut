import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProperty_RequestArgs } from "./args/FindUniqueProperty_RequestArgs";
import { Property_Request } from "../../../models/Property_Request";
export declare class FindUniqueProperty_RequestResolver {
    property_Request(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProperty_RequestArgs): Promise<Property_Request | null>;
}
