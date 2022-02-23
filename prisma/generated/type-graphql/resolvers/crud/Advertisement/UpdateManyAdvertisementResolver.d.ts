import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAdvertisementArgs } from "./args/UpdateManyAdvertisementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAdvertisementResolver {
    updateManyAdvertisement(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAdvertisementArgs): Promise<AffectedRowsOutput>;
}
