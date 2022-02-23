import { GraphQLResolveInfo } from "graphql";
import { UpsertSearchArgs } from "./args/UpsertSearchArgs";
import { Search } from "../../../models/Search";
export declare class UpsertSearchResolver {
    upsertSearch(ctx: any, info: GraphQLResolveInfo, args: UpsertSearchArgs): Promise<Search>;
}
