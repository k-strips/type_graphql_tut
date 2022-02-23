import { GraphQLResolveInfo } from "graphql";
import { UpdateLandSizeArgs } from "./args/UpdateLandSizeArgs";
import { LandSize } from "../../../models/LandSize";
export declare class UpdateLandSizeResolver {
    updateLandSize(ctx: any, info: GraphQLResolveInfo, args: UpdateLandSizeArgs): Promise<LandSize | null>;
}
