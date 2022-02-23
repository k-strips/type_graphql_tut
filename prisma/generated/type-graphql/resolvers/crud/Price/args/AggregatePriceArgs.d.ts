import { PriceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PriceOrderByWithRelationAndSearchRelevanceInput";
import { PriceWhereInput } from "../../../inputs/PriceWhereInput";
import { PriceWhereUniqueInput } from "../../../inputs/PriceWhereUniqueInput";
export declare class AggregatePriceArgs {
    where?: PriceWhereInput | undefined;
    orderBy?: PriceOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PriceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
