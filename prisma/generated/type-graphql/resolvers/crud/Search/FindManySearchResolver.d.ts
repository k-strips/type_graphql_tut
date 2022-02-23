import { GraphQLResolveInfo } from "graphql";
import { FindManySearchArgs } from "./args/FindManySearchArgs";
import { Search } from "../../../models/Search";
export declare class FindManySearchResolver {
    searches(ctx: any, info: GraphQLResolveInfo, args: FindManySearchArgs): Promise<Search[]>;
}
