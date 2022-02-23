import { GraphQLResolveInfo } from "graphql";
import { DeletePropertyArgs } from "./args/DeletePropertyArgs";
import { Property } from "../../../models/Property";
export declare class DeletePropertyResolver {
    deleteProperty(ctx: any, info: GraphQLResolveInfo, args: DeletePropertyArgs): Promise<Property | null>;
}
