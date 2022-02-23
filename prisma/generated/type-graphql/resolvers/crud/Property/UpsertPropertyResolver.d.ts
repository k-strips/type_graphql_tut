import { GraphQLResolveInfo } from "graphql";
import { UpsertPropertyArgs } from "./args/UpsertPropertyArgs";
import { Property } from "../../../models/Property";
export declare class UpsertPropertyResolver {
    upsertProperty(ctx: any, info: GraphQLResolveInfo, args: UpsertPropertyArgs): Promise<Property>;
}
