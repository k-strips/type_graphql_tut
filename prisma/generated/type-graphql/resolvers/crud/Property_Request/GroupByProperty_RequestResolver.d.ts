import { GraphQLResolveInfo } from "graphql";
import { GroupByProperty_RequestArgs } from "./args/GroupByProperty_RequestArgs";
import { Property_RequestGroupBy } from "../../outputs/Property_RequestGroupBy";
export declare class GroupByProperty_RequestResolver {
    groupByProperty_Request(ctx: any, info: GraphQLResolveInfo, args: GroupByProperty_RequestArgs): Promise<Property_RequestGroupBy[]>;
}
