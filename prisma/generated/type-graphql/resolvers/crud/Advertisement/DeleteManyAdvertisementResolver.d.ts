import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAdvertisementArgs } from "./args/DeleteManyAdvertisementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAdvertisementResolver {
    deleteManyAdvertisement(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAdvertisementArgs): Promise<AffectedRowsOutput>;
}
