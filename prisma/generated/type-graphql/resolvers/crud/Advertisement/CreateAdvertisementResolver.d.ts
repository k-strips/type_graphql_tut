import { GraphQLResolveInfo } from "graphql";
import { CreateAdvertisementArgs } from "./args/CreateAdvertisementArgs";
import { Advertisement } from "../../../models/Advertisement";
export declare class CreateAdvertisementResolver {
    createAdvertisement(ctx: any, info: GraphQLResolveInfo, args: CreateAdvertisementArgs): Promise<Advertisement>;
}
