import { GraphQLResolveInfo } from "graphql";
import { GroupBySaveArgs } from "./args/GroupBySaveArgs";
import { SaveGroupBy } from "../../outputs/SaveGroupBy";
export declare class GroupBySaveResolver {
    groupBySave(ctx: any, info: GraphQLResolveInfo, args: GroupBySaveArgs): Promise<SaveGroupBy[]>;
}
