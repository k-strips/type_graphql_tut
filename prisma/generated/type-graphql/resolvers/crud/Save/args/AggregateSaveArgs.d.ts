import { SaveOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SaveOrderByWithRelationAndSearchRelevanceInput";
import { SaveWhereInput } from "../../../inputs/SaveWhereInput";
import { SaveWhereUniqueInput } from "../../../inputs/SaveWhereUniqueInput";
export declare class AggregateSaveArgs {
    where?: SaveWhereInput | undefined;
    orderBy?: SaveOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SaveWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
