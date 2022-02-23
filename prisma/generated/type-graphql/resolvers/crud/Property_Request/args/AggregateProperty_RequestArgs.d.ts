import { Property_RequestOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Property_RequestOrderByWithRelationAndSearchRelevanceInput";
import { Property_RequestWhereInput } from "../../../inputs/Property_RequestWhereInput";
import { Property_RequestWhereUniqueInput } from "../../../inputs/Property_RequestWhereUniqueInput";
export declare class AggregateProperty_RequestArgs {
    where?: Property_RequestWhereInput | undefined;
    orderBy?: Property_RequestOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Property_RequestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
