import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProperty_RequestArgs } from "./args/UpdateManyProperty_RequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProperty_RequestResolver {
    updateManyProperty_Request(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProperty_RequestArgs): Promise<AffectedRowsOutput>;
}
