import { GraphQLResolveInfo } from "graphql";
import { UpsertAdvertisementArgs } from "./args/UpsertAdvertisementArgs";
import { Advertisement } from "../../../models/Advertisement";
export declare class UpsertAdvertisementResolver {
    upsertAdvertisement(ctx: any, info: GraphQLResolveInfo, args: UpsertAdvertisementArgs): Promise<Advertisement>;
}
