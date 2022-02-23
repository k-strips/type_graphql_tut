import { Advertisement } from "../models/Advertisement";
import { Property } from "../models/Property";
import { Property_Request } from "../models/Property_Request";
export declare class Price {
    id: string;
    figure: number;
    currency: "GHS" | "USD";
    duration?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | null;
    Property?: Property | null;
    propertyId?: string | null;
    advertisement?: Advertisement | null;
    advertisementId?: string | null;
    Property_Request?: Property_Request | null;
    property_RequestId?: string | null;
}
