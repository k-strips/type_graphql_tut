import { Address } from "../../../models/Address";
import { Advertisement } from "../../../models/Advertisement";
import { Organization } from "../../../models/Organization";
import { Property } from "../../../models/Property";
import { Property_Request } from "../../../models/Property_Request";
import { Save } from "../../../models/Save";
import { User } from "../../../models/User";
import { UserAdvertisementArgs } from "./args/UserAdvertisementArgs";
import { UserPropertyArgs } from "./args/UserPropertyArgs";
import { UserRequestArgs } from "./args/UserRequestArgs";
import { UserSavesArgs } from "./args/UserSavesArgs";
export declare class UserRelationsResolver {
    address(user: User, ctx: any): Promise<Address | null>;
    property(user: User, ctx: any, args: UserPropertyArgs): Promise<Property[]>;
    saves(user: User, ctx: any, args: UserSavesArgs): Promise<Save[]>;
    advertisement(user: User, ctx: any, args: UserAdvertisementArgs): Promise<Advertisement[]>;
    request(user: User, ctx: any, args: UserRequestArgs): Promise<Property_Request[]>;
    organization(user: User, ctx: any): Promise<Organization | null>;
}
