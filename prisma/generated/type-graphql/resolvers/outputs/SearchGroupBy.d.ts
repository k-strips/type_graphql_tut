import { SearchAvgAggregate } from "../outputs/SearchAvgAggregate";
import { SearchCountAggregate } from "../outputs/SearchCountAggregate";
import { SearchMaxAggregate } from "../outputs/SearchMaxAggregate";
import { SearchMinAggregate } from "../outputs/SearchMinAggregate";
import { SearchSumAggregate } from "../outputs/SearchSumAggregate";
export declare class SearchGroupBy {
    id: string;
    userId: string;
    category: "AGRICULTURAL_FARMLAND" | "COMMERCIAL" | "PARTIES_EVENT" | "RESIDENTIAL";
    type: "FISH_FARM" | "CROP_FARM" | "LIVESTOCK_FARM" | "RETAIL" | "OFFICE" | "BANKING" | "LEISURE" | "HEALTHCARE" | "HOTEL" | "SHOP" | "SHIPPING_CONTAINER" | "INDOOR" | "BANQUET_HALL" | "BALLROOM" | "COMMUNITY_CENTER" | "CONFERENCE_ROOMS" | "hOTELS" | "NIGHT_CLUBS" | "GARDENS" | "CHURCH" | "STADIA" | "THEATERS" | "HOUSE" | "NEW_DEVELOPMENT" | "BUNGALOW" | "APARTMENT" | "STUDION" | "PENTHOUSE" | "BUILDING_PLOT" | null;
    acquisition: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY" | null;
    seating: number | null;
    state: "FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED" | null;
    bedrooms: number | null;
    bathrooms: number | null;
    parkingCapacity: number | null;
    location: string | null;
    createdAt: Date;
    _count: SearchCountAggregate | null;
    _avg: SearchAvgAggregate | null;
    _sum: SearchSumAggregate | null;
    _min: SearchMinAggregate | null;
    _max: SearchMaxAggregate | null;
}
