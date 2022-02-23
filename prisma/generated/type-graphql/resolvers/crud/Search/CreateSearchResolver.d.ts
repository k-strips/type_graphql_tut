import { GraphQLResolveInfo } from "graphql";
import { CreateSearchArgs } from "./args/CreateSearchArgs";
import { Search } from "../../../models/Search";
export declare class CreateSearchResolver {
    createSearch(ctx: any, info: GraphQLResolveInfo, args: CreateSearchArgs): Promise<Search>;
}
