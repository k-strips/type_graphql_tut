import { GraphQLResolveInfo } from "graphql";
import { CreateManyPropertyArgs } from "./args/CreateManyPropertyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPropertyResolver {
    createManyProperty(ctx: any, info: GraphQLResolveInfo, args: CreateManyPropertyArgs): Promise<AffectedRowsOutput>;
}
