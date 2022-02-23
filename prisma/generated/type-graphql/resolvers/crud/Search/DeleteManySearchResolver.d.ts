import { GraphQLResolveInfo } from "graphql";
import { DeleteManySearchArgs } from "./args/DeleteManySearchArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySearchResolver {
    deleteManySearch(ctx: any, info: GraphQLResolveInfo, args: DeleteManySearchArgs): Promise<AffectedRowsOutput>;
}
