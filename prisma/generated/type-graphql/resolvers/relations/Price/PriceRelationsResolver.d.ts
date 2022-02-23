import { Advertisement } from "../../../models/Advertisement";
import { Price } from "../../../models/Price";
import { Property } from "../../../models/Property";
import { Property_Request } from "../../../models/Property_Request";
export declare class PriceRelationsResolver {
    Property(price: Price, ctx: any): Promise<Property | null>;
    advertisement(price: Price, ctx: any): Promise<Advertisement | null>;
    Property_Request(price: Price, ctx: any): Promise<Property_Request | null>;
}
