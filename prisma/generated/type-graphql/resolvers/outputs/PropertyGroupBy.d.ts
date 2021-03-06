import { PropertyAvgAggregate } from "../outputs/PropertyAvgAggregate";
import { PropertyCountAggregate } from "../outputs/PropertyCountAggregate";
import { PropertyMaxAggregate } from "../outputs/PropertyMaxAggregate";
import { PropertyMinAggregate } from "../outputs/PropertyMinAggregate";
import { PropertySumAggregate } from "../outputs/PropertySumAggregate";
export declare class PropertyGroupBy {
    id: string;
    type: "FISH_FARM" | "CROP_FARM" | "LIVESTOCK_FARM" | "RETAIL" | "OFFICE" | "BANKING" | "LEISURE" | "HEALTHCARE" | "HOTEL" | "SHOP" | "SHIPPING_CONTAINER" | "INDOOR" | "BANQUET_HALL" | "BALLROOM" | "COMMUNITY_CENTER" | "CONFERENCE_ROOMS" | "hOTELS" | "NIGHT_CLUBS" | "GARDENS" | "CHURCH" | "STADIA" | "THEATERS" | "HOUSE" | "NEW_DEVELOPMENT" | "BUNGALOW" | "APARTMENT" | "STUDION" | "PENTHOUSE" | "BUILDING_PLOT";
    acquisition: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY";
    state: "FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED" | null;
    images: string[] | null;
    amenities: string[] | null;
    parkingCapacity: number | null;
    seating: number | null;
    bedrooms: number | null;
    bathrooms: number | null;
    description: string | null;
    views: number;
    source: string;
    region: string;
    city: string;
    town: string;
    streetName: string | null;
    digitalAddress: string | null;
    locationDesc: string | null;
    lat: number | null;
    lon: number | null;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    organizationId: string | null;
    userId: string | null;
    _count: PropertyCountAggregate | null;
    _avg: PropertyAvgAggregate | null;
    _sum: PropertySumAggregate | null;
    _min: PropertyMinAggregate | null;
    _max: PropertyMaxAggregate | null;
}
