import { GraphQLResolveInfo } from "graphql";
import { FindFirstAdvertisementArgs } from "./args/FindFirstAdvertisementArgs";
import { Advertisement } from "../../../models/Advertisement";
export declare class FindFirstAdvertisementResolver {
    findFirstAdvertisement(ctx: any, info: GraphQLResolveInfo, args: FindFirstAdvertisementArgs): Promise<Advertisement | null>;
}
