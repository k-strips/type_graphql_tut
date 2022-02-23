import { GraphQLResolveInfo } from "graphql";
import { UpsertLandSizeArgs } from "./args/UpsertLandSizeArgs";
import { LandSize } from "../../../models/LandSize";
export declare class UpsertLandSizeResolver {
    upsertLandSize(ctx: any, info: GraphQLResolveInfo, args: UpsertLandSizeArgs): Promise<LandSize>;
}
