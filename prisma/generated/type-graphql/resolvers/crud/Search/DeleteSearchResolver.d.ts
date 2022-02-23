import { GraphQLResolveInfo } from "graphql";
import { DeleteSearchArgs } from "./args/DeleteSearchArgs";
import { Search } from "../../../models/Search";
export declare class DeleteSearchResolver {
    deleteSearch(ctx: any, info: GraphQLResolveInfo, args: DeleteSearchArgs): Promise<Search | null>;
}
