import { GraphQLResolveInfo } from "graphql";
import { DeleteAdvertisementArgs } from "./args/DeleteAdvertisementArgs";
import { Advertisement } from "../../../models/Advertisement";
export declare class DeleteAdvertisementResolver {
    deleteAdvertisement(ctx: any, info: GraphQLResolveInfo, args: DeleteAdvertisementArgs): Promise<Advertisement | null>;
}
