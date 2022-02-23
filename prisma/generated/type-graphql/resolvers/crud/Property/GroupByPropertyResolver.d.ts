import { GraphQLResolveInfo } from "graphql";
import { GroupByPropertyArgs } from "./args/GroupByPropertyArgs";
import { PropertyGroupBy } from "../../outputs/PropertyGroupBy";
export declare class GroupByPropertyResolver {
    groupByProperty(ctx: any, info: GraphQLResolveInfo, args: GroupByPropertyArgs): Promise<PropertyGroupBy[]>;
}
