export declare class PriceCreateManyInput {
    id?: string | undefined;
    figure: number;
    currency: "GHS" | "USD";
    duration?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | undefined;
    propertyId?: string | undefined;
    advertisementId?: string | undefined;
    property_RequestId?: string | undefined;
}
