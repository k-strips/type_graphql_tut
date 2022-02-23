import { GraphQLResolveInfo } from "graphql";
import { UpdateSearchArgs } from "./args/UpdateSearchArgs";
import { Search } from "../../../models/Search";
export declare class UpdateSearchResolver {
    updateSearch(ctx: any, info: GraphQLResolveInfo, args: UpdateSearchArgs): Promise<Search | null>;
}
