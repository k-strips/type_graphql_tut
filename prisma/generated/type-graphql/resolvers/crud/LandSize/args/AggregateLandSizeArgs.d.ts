import { LandSizeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/LandSizeOrderByWithRelationAndSearchRelevanceInput";
import { LandSizeWhereInput } from "../../../inputs/LandSizeWhereInput";
import { LandSizeWhereUniqueInput } from "../../../inputs/LandSizeWhereUniqueInput";
export declare class AggregateLandSizeArgs {
    where?: LandSizeWhereInput | undefined;
    orderBy?: LandSizeOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: LandSizeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
