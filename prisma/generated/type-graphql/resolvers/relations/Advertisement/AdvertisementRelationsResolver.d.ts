import { Advertisement } from "../../../models/Advertisement";
import { Organization } from "../../../models/Organization";
import { Price } from "../../../models/Price";
import { Property } from "../../../models/Property";
import { User } from "../../../models/User";
export declare class AdvertisementRelationsResolver {
    price(advertisement: Advertisement, ctx: any): Promise<Price | null>;
    user(advertisement: Advertisement, ctx: any): Promise<User | null>;
    organization(advertisement: Advertisement, ctx: any): Promise<Organization | null>;
    property(advertisement: Advertisement, ctx: any): Promise<Property | null>;
}
