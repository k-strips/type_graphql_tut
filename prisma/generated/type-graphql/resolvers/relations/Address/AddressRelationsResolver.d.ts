import { Address } from "../../../models/Address";
import { Organization } from "../../../models/Organization";
import { User } from "../../../models/User";
export declare class AddressRelationsResolver {
    Organization(address: Address, ctx: any): Promise<Organization | null>;
    User(address: Address, ctx: any): Promise<User | null>;
}
