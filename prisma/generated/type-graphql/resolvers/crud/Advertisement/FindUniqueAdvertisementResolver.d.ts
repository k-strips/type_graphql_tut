import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAdvertisementArgs } from "./args/FindUniqueAdvertisementArgs";
import { Advertisement } from "../../../models/Advertisement";
export declare class FindUniqueAdvertisementResolver {
    advertisement(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAdvertisementArgs): Promise<Advertisement | null>;
}
