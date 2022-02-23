import { GraphQLResolveInfo } from "graphql";
import { FindManyAdvertisementArgs } from "./args/FindManyAdvertisementArgs";
import { Advertisement } from "../../../models/Advertisement";
export declare class FindManyAdvertisementResolver {
    advertisements(ctx: any, info: GraphQLResolveInfo, args: FindManyAdvertisementArgs): Promise<Advertisement[]>;
}
