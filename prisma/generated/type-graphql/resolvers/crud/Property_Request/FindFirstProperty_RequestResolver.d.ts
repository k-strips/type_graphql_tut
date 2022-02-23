import { GraphQLResolveInfo } from "graphql";
import { FindFirstProperty_RequestArgs } from "./args/FindFirstProperty_RequestArgs";
import { Property_Request } from "../../../models/Property_Request";
export declare class FindFirstProperty_RequestResolver {
    findFirstProperty_Request(ctx: any, info: GraphQLResolveInfo, args: FindFirstProperty_RequestArgs): Promise<Property_Request | null>;
}
