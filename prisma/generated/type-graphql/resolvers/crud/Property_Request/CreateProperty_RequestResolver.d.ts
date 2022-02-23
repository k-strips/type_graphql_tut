import { GraphQLResolveInfo } from "graphql";
import { CreateProperty_RequestArgs } from "./args/CreateProperty_RequestArgs";
import { Property_Request } from "../../../models/Property_Request";
export declare class CreateProperty_RequestResolver {
    createProperty_Request(ctx: any, info: GraphQLResolveInfo, args: CreateProperty_RequestArgs): Promise<Property_Request>;
}
