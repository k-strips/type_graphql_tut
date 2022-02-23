import { GraphQLResolveInfo } from "graphql";
import { FindUniquePropertyArgs } from "./args/FindUniquePropertyArgs";
import { Property } from "../../../models/Property";
export declare class FindUniquePropertyResolver {
    property(ctx: any, info: GraphQLResolveInfo, args: FindUniquePropertyArgs): Promise<Property | null>;
}
