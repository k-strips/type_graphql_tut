import { GraphQLResolveInfo } from "graphql";
import { UpdateManyLandSizeArgs } from "./args/UpdateManyLandSizeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLandSizeResolver {
    updateManyLandSize(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLandSizeArgs): Promise<AffectedRowsOutput>;
}
