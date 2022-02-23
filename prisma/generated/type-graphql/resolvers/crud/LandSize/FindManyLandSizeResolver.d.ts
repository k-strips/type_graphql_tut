import { GraphQLResolveInfo } from "graphql";
import { FindManyLandSizeArgs } from "./args/FindManyLandSizeArgs";
import { LandSize } from "../../../models/LandSize";
export declare class FindManyLandSizeResolver {
    landSizes(ctx: any, info: GraphQLResolveInfo, args: FindManyLandSizeArgs): Promise<LandSize[]>;
}
