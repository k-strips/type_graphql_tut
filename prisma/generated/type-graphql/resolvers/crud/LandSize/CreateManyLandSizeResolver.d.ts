import { GraphQLResolveInfo } from "graphql";
import { CreateManyLandSizeArgs } from "./args/CreateManyLandSizeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLandSizeResolver {
    createManyLandSize(ctx: any, info: GraphQLResolveInfo, args: CreateManyLandSizeArgs): Promise<AffectedRowsOutput>;
}
