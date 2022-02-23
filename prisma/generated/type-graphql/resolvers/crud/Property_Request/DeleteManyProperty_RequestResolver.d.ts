import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProperty_RequestArgs } from "./args/DeleteManyProperty_RequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProperty_RequestResolver {
    deleteManyProperty_Request(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProperty_RequestArgs): Promise<AffectedRowsOutput>;
}
