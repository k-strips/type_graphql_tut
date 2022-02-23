import { Advertisement } from "../../../models/Advertisement";
import { LandSize } from "../../../models/LandSize";
import { Organization } from "../../../models/Organization";
import { Price } from "../../../models/Price";
import { Property } from "../../../models/Property";
import { Save } from "../../../models/Save";
import { User } from "../../../models/User";
import { PropertyAdvertisementArgs } from "./args/PropertyAdvertisementArgs";
import { PropertyLikesArgs } from "./args/PropertyLikesArgs";
export declare class PropertyRelationsResolver {
    size(property: Property, ctx: any): Promise<LandSize | null>;
    price(property: Property, ctx: any): Promise<Price | null>;
    likes(property: Property, ctx: any, args: PropertyLikesArgs): Promise<Save[]>;
    owner(property: Property, ctx: any): Promise<User | null>;
    organization(property: Property, ctx: any): Promise<Organization | null>;
    advertisement(property: Property, ctx: any, args: PropertyAdvertisementArgs): Promise<Advertisement[]>;
}
