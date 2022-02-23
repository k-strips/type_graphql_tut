import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPropertyArgs } from "./args/DeleteManyPropertyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPropertyResolver {
    deleteManyProperty(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPropertyArgs): Promise<AffectedRowsOutput>;
}
