import { GraphQLResolveInfo } from "graphql";
import { AggregateSearchArgs } from "./args/AggregateSearchArgs";
import { AggregateSearch } from "../../outputs/AggregateSearch";
export declare class AggregateSearchResolver {
    aggregateSearch(ctx: any, info: GraphQLResolveInfo, args: AggregateSearchArgs): Promise<AggregateSearch>;
}
