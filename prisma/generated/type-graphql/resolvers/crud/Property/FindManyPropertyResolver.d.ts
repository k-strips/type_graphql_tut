import { GraphQLResolveInfo } from "graphql";
import { FindManyPropertyArgs } from "./args/FindManyPropertyArgs";
import { Property } from "../../../models/Property";
export declare class FindManyPropertyResolver {
    properties(ctx: any, info: GraphQLResolveInfo, args: FindManyPropertyArgs): Promise<Property[]>;
}
