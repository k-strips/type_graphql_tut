import { AddressOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AddressOrderByWithRelationAndSearchRelevanceInput";
import { AdvertisementOrderByRelationAggregateInput } from "../inputs/AdvertisementOrderByRelationAggregateInput";
import { OrganizationOrderByWithRelationAndSearchRelevanceInput } from "../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput";
import { PropertyOrderByRelationAggregateInput } from "../inputs/PropertyOrderByRelationAggregateInput";
import { Property_RequestOrderByRelationAggregateInput } from "../inputs/Property_RequestOrderByRelationAggregateInput";
import { SaveOrderByRelationAggregateInput } from "../inputs/SaveOrderByRelationAggregateInput";
import { UserOrderByRelevanceInput } from "../inputs/UserOrderByRelevanceInput";
export declare class UserOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    middleName?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    address?: AddressOrderByWithRelationAndSearchRelevanceInput | undefined;
    property?: PropertyOrderByRelationAggregateInput | undefined;
    saves?: SaveOrderByRelationAggregateInput | undefined;
    advertisement?: AdvertisementOrderByRelationAggregateInput | undefined;
    request?: Property_RequestOrderByRelationAggregateInput | undefined;
    isVerified?: "asc" | "desc" | undefined;
    isRegistrated?: "asc" | "desc" | undefined;
    isDeleted?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    organization?: OrganizationOrderByWithRelationAndSearchRelevanceInput | undefined;
    organizationId?: "asc" | "desc" | undefined;
    _relevance?: UserOrderByRelevanceInput | undefined;
}
