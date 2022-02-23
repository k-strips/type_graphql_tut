import { GraphQLResolveInfo } from "graphql";
import { CreatePropertyArgs } from "./args/CreatePropertyArgs";
import { Property } from "../../../models/Property";
export declare class CreatePropertyResolver {
    createProperty(ctx: any, info: GraphQLResolveInfo, args: CreatePropertyArgs): Promise<Property>;
}
