import { GraphQLResolveInfo } from "graphql";
import { CreateManyAdvertisementArgs } from "./args/CreateManyAdvertisementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAdvertisementResolver {
    createManyAdvertisement(ctx: any, info: GraphQLResolveInfo, args: CreateManyAdvertisementArgs): Promise<AffectedRowsOutput>;
}
