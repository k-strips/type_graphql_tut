import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLandSizeArgs } from "./args/FindUniqueLandSizeArgs";
import { LandSize } from "../../../models/LandSize";
export declare class FindUniqueLandSizeResolver {
    landSize(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLandSizeArgs): Promise<LandSize | null>;
}
