import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPropertyArgs } from "./args/UpdateManyPropertyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPropertyResolver {
    updateManyProperty(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPropertyArgs): Promise<AffectedRowsOutput>;
}
