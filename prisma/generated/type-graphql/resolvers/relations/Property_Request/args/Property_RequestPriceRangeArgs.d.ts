import { PriceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PriceOrderByWithRelationAndSearchRelevanceInput";
import { PriceWhereInput } from "../../../inputs/PriceWhereInput";
import { PriceWhereUniqueInput } from "../../../inputs/PriceWhereUniqueInput";
export declare class Property_RequestPriceRangeArgs {
    where?: PriceWhereInput | undefined;
    orderBy?: PriceOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PriceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "figure" | "currency" | "duration" | "propertyId" | "advertisementId" | "property_RequestId"> | undefined;
}
