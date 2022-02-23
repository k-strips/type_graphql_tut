import { LandSize } from "../../../models/LandSize";
import { Price } from "../../../models/Price";
import { Property_Request } from "../../../models/Property_Request";
import { User } from "../../../models/User";
import { Property_RequestPriceRangeArgs } from "./args/Property_RequestPriceRangeArgs";
export declare class Property_RequestRelationsResolver {
    priceRange(property_Request: Property_Request, ctx: any, args: Property_RequestPriceRangeArgs): Promise<Price[]>;
    size(property_Request: Property_Request, ctx: any): Promise<LandSize | null>;
    user(property_Request: Property_Request, ctx: any): Promise<User | null>;
}
