import { GraphQLResolveInfo } from "graphql";
import { DeleteManyLandSizeArgs } from "./args/DeleteManyLandSizeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLandSizeResolver {
    deleteManyLandSize(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLandSizeArgs): Promise<AffectedRowsOutput>;
}
