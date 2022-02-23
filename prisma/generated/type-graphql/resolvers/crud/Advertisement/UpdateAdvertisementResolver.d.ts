import { GraphQLResolveInfo } from "graphql";
import { UpdateAdvertisementArgs } from "./args/UpdateAdvertisementArgs";
import { Advertisement } from "../../../models/Advertisement";
export declare class UpdateAdvertisementResolver {
    updateAdvertisement(ctx: any, info: GraphQLResolveInfo, args: UpdateAdvertisementArgs): Promise<Advertisement | null>;
}
