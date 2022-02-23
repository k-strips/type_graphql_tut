import { GraphQLResolveInfo } from "graphql";
import { FindFirstPropertyArgs } from "./args/FindFirstPropertyArgs";
import { Property } from "../../../models/Property";
export declare class FindFirstPropertyResolver {
    findFirstProperty(ctx: any, info: GraphQLResolveInfo, args: FindFirstPropertyArgs): Promise<Property | null>;
}
