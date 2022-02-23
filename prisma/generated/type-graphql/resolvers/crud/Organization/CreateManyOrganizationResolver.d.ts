import { GraphQLResolveInfo } from "graphql";
import { CreateManyOrganizationArgs } from "./args/CreateManyOrganizationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOrganizationResolver {
    createManyOrganization(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrganizationArgs): Promise<AffectedRowsOutput>;
}
