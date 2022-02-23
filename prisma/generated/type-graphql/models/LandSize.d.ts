import { Property } from "../models/Property";
import { Property_Request } from "../models/Property_Request";
export declare class LandSize {
    id: string;
    measurement: number;
    unit: "ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER";
    Property?: Property | null;
    propertyId?: string | null;
    Property_Request?: Property_Request | null;
    property_RequestId?: string | null;
}
