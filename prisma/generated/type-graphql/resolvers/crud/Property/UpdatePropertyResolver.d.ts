import { GraphQLResolveInfo } from "graphql";
import { UpdatePropertyArgs } from "./args/UpdatePropertyArgs";
import { Property } from "../../../models/Property";
export declare class UpdatePropertyResolver {
    updateProperty(ctx: any, info: GraphQLResolveInfo, args: UpdatePropertyArgs): Promise<Property | null>;
}
