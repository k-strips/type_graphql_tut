import { GraphQLResolveInfo } from "graphql";
import { AggregateSaveArgs } from "./args/AggregateSaveArgs";
import { AggregateSave } from "../../outputs/AggregateSave";
export declare class AggregateSaveResolver {
    aggregateSave(ctx: any, info: GraphQLResolveInfo, args: AggregateSaveArgs): Promise<AggregateSave>;
}
