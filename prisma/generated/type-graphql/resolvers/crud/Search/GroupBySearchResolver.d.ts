import { GraphQLResolveInfo } from "graphql";
import { GroupBySearchArgs } from "./args/GroupBySearchArgs";
import { SearchGroupBy } from "../../outputs/SearchGroupBy";
export declare class GroupBySearchResolver {
    groupBySearch(ctx: any, info: GraphQLResolveInfo, args: GroupBySearchArgs): Promise<SearchGroupBy[]>;
}
