import { SearchOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SearchOrderByWithRelationAndSearchRelevanceInput";
import { SearchWhereInput } from "../../../inputs/SearchWhereInput";
import { SearchWhereUniqueInput } from "../../../inputs/SearchWhereUniqueInput";
export declare class AggregateSearchArgs {
    where?: SearchWhereInput | undefined;
    orderBy?: SearchOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SearchWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
