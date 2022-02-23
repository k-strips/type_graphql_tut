import { Address } from "../../../models/Address";
import { Advertisement } from "../../../models/Advertisement";
import { Organization } from "../../../models/Organization";
import { Property } from "../../../models/Property";
import { User } from "../../../models/User";
import { OrganizationAdvertisementArgs } from "./args/OrganizationAdvertisementArgs";
import { OrganizationMembersArgs } from "./args/OrganizationMembersArgs";
import { OrganizationPropertiesArgs } from "./args/OrganizationPropertiesArgs";
export declare class OrganizationRelationsResolver {
    address(organization: Organization, ctx: any): Promise<Address | null>;
    members(organization: Organization, ctx: any, args: OrganizationMembersArgs): Promise<User[]>;
    properties(organization: Organization, ctx: any, args: OrganizationPropertiesArgs): Promise<Property[]>;
    advertisement(organization: Organization, ctx: any, args: OrganizationAdvertisementArgs): Promise<Advertisement[]>;
}
