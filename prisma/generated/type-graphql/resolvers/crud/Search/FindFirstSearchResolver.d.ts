import { GraphQLResolveInfo } from "graphql";
import { FindFirstSearchArgs } from "./args/FindFirstSearchArgs";
import { Search } from "../../../models/Search";
export declare class FindFirstSearchResolver {
    findFirstSearch(ctx: any, info: GraphQLResolveInfo, args: FindFirstSearchArgs): Promise<Search | null>;
}
