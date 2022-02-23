import { PropertyOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput";
import { PropertyWhereInput } from "../../../inputs/PropertyWhereInput";
import { PropertyWhereUniqueInput } from "../../../inputs/PropertyWhereUniqueInput";
export declare class AggregatePropertyArgs {
    where?: PropertyWhereInput | undefined;
    orderBy?: PropertyOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PropertyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
