import { Property_RequestAvgAggregate } from "../outputs/Property_RequestAvgAggregate";
import { Property_RequestCountAggregate } from "../outputs/Property_RequestCountAggregate";
import { Property_RequestMaxAggregate } from "../outputs/Property_RequestMaxAggregate";
import { Property_RequestMinAggregate } from "../outputs/Property_RequestMinAggregate";
import { Property_RequestSumAggregate } from "../outputs/Property_RequestSumAggregate";
export declare class Property_RequestGroupBy {
    id: string;
    type: "FISH_FARM" | "CROP_FARM" | "LIVESTOCK_FARM" | "RETAIL" | "OFFICE" | "BANKING" | "LEISURE" | "HEALTHCARE" | "HOTEL" | "SHOP" | "SHIPPING_CONTAINER" | "INDOOR" | "BANQUET_HALL" | "BALLROOM" | "COMMUNITY_CENTER" | "CONFERENCE_ROOMS" | "hOTELS" | "NIGHT_CLUBS" | "GARDENS" | "CHURCH" | "STADIA" | "THEATERS" | "HOUSE" | "NEW_DEVELOPMENT" | "BUNGALOW" | "APARTMENT" | "STUDION" | "PENTHOUSE" | "BUILDING_PLOT";
    acquisition: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY";
    state: "FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED" | null;
    amenities: string[] | null;
    parkingCapacity: number | null;
    seating: number | null;
    bedrooms: number | null;
    bathrooms: number | null;
    additionalInfo: string | null;
    region: string | null;
    city: string | null;
    town: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    _count: Property_RequestCountAggregate | null;
    _avg: Property_RequestAvgAggregate | null;
    _sum: Property_RequestSumAggregate | null;
    _min: Property_RequestMinAggregate | null;
    _max: Property_RequestMaxAggregate | null;
}
