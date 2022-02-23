import { LandSize } from "../models/LandSize";
import { Price } from "../models/Price";
import { User } from "../models/User";
import { Property_RequestCount } from "../resolvers/outputs/Property_RequestCount";
export declare class Property_Request {
    id: string;
    type: "FISH_FARM" | "CROP_FARM" | "LIVESTOCK_FARM" | "RETAIL" | "OFFICE" | "BANKING" | "LEISURE" | "HEALTHCARE" | "HOTEL" | "SHOP" | "SHIPPING_CONTAINER" | "INDOOR" | "BANQUET_HALL" | "BALLROOM" | "COMMUNITY_CENTER" | "CONFERENCE_ROOMS" | "hOTELS" | "NIGHT_CLUBS" | "GARDENS" | "CHURCH" | "STADIA" | "THEATERS" | "HOUSE" | "NEW_DEVELOPMENT" | "BUNGALOW" | "APARTMENT" | "STUDION" | "PENTHOUSE" | "BUILDING_PLOT";
    acquisition: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY";
    state?: "FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED" | null;
    priceRange?: Price[];
    amenities: string[];
    size?: LandSize | null;
    parkingCapacity?: number | null;
    seating?: number | null;
    bedrooms?: number | null;
    bathrooms?: number | null;
    additionalInfo?: string | null;
    region?: string | null;
    city?: string | null;
    town?: string | null;
    createdAt: Date;
    updatedAt: Date;
    user?: User | null;
    userId?: string | null;
    _count?: Property_RequestCount | null;
}
