import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSearchArgs } from "./args/FindUniqueSearchArgs";
import { Search } from "../../../models/Search";
export declare class FindUniqueSearchResolver {
    search(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSearchArgs): Promise<Search | null>;
}
