import { GraphQLResolveInfo } from "graphql";
import { CreateManyProperty_RequestArgs } from "./args/CreateManyProperty_RequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProperty_RequestResolver {
    createManyProperty_Request(ctx: any, info: GraphQLResolveInfo, args: CreateManyProperty_RequestArgs): Promise<AffectedRowsOutput>;
}
