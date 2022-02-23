import { PropertyCreateamenitiesInput } from "../inputs/PropertyCreateamenitiesInput";
import { PropertyCreateimagesInput } from "../inputs/PropertyCreateimagesInput";
export declare class PropertyCreateManyOwnerInput {
    id?: string | undefined;
    type: "FISH_FARM" | "CROP_FARM" | "LIVESTOCK_FARM" | "RETAIL" | "OFFICE" | "BANKING" | "LEISURE" | "HEALTHCARE" | "HOTEL" | "SHOP" | "SHIPPING_CONTAINER" | "INDOOR" | "BANQUET_HALL" | "BALLROOM" | "COMMUNITY_CENTER" | "CONFERENCE_ROOMS" | "hOTELS" | "NIGHT_CLUBS" | "GARDENS" | "CHURCH" | "STADIA" | "THEATERS" | "HOUSE" | "NEW_DEVELOPMENT" | "BUNGALOW" | "APARTMENT" | "STUDION" | "PENTHOUSE" | "BUILDING_PLOT";
    acquisition: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY";
    state?: "FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED" | undefined;
    images?: PropertyCreateimagesInput | undefined;
    amenities?: PropertyCreateamenitiesInput | undefined;
    parkingCapacity?: number | undefined;
    seating?: number | undefined;
    bedrooms?: number | undefined;
    bathrooms?: number | undefined;
    description?: string | undefined;
    views?: number | undefined;
    source: string;
    region: string;
    city: string;
    town: string;
    streetName?: string | undefined;
    digitalAddress?: string | undefined;
    locationDesc?: string | undefined;
    lat?: number | undefined;
    lon?: number | undefined;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    organizationId?: string | undefined;
}
