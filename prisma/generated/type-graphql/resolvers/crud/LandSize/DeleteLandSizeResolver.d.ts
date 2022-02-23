import { GraphQLResolveInfo } from "graphql";
import { DeleteLandSizeArgs } from "./args/DeleteLandSizeArgs";
import { LandSize } from "../../../models/LandSize";
export declare class DeleteLandSizeResolver {
    deleteLandSize(ctx: any, info: GraphQLResolveInfo, args: DeleteLandSizeArgs): Promise<LandSize | null>;
}
