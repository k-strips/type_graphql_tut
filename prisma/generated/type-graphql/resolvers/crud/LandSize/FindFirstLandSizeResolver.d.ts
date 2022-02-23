import { GraphQLResolveInfo } from "graphql";
import { FindFirstLandSizeArgs } from "./args/FindFirstLandSizeArgs";
import { LandSize } from "../../../models/LandSize";
export declare class FindFirstLandSizeResolver {
    findFirstLandSize(ctx: any, info: GraphQLResolveInfo, args: FindFirstLandSizeArgs): Promise<LandSize | null>;
}
