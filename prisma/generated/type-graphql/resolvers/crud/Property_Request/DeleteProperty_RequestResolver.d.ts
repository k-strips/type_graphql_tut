import { GraphQLResolveInfo } from "graphql";
import { DeleteProperty_RequestArgs } from "./args/DeleteProperty_RequestArgs";
import { Property_Request } from "../../../models/Property_Request";
export declare class DeleteProperty_RequestResolver {
    deleteProperty_Request(ctx: any, info: GraphQLResolveInfo, args: DeleteProperty_RequestArgs): Promise<Property_Request | null>;
}
