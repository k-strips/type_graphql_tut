import { GraphQLResolveInfo } from "graphql";
import { CreateLandSizeArgs } from "./args/CreateLandSizeArgs";
import { LandSize } from "../../../models/LandSize";
export declare class CreateLandSizeResolver {
    createLandSize(ctx: any, info: GraphQLResolveInfo, args: CreateLandSizeArgs): Promise<LandSize>;
}
