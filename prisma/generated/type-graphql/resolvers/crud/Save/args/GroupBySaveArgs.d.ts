import { SaveOrderByWithAggregationInput } from "../../../inputs/SaveOrderByWithAggregationInput";
import { SaveScalarWhereWithAggregatesInput } from "../../../inputs/SaveScalarWhereWithAggregatesInput";
import { SaveWhereInput } from "../../../inputs/SaveWhereInput";
export declare class GroupBySaveArgs {
    where?: SaveWhereInput | undefined;
    orderBy?: SaveOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "userId" | "propertyId">;
    having?: SaveScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
