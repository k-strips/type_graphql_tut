import { AddressOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AddressOrderByWithRelationAndSearchRelevanceInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";
export declare class FindFirstAddressArgs {
    where?: AddressWhereInput | undefined;
    orderBy?: AddressOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AddressWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "email" | "mobile" | "work" | "office" | "createdAt" | "updatedAt" | "organizationId" | "userId"> | undefined;
}
