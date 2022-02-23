export declare class SearchCreateInput {
    id?: string | undefined;
    userId: string;
    category: "AGRICULTURAL_FARMLAND" | "COMMERCIAL" | "PARTIES_EVENT" | "RESIDENTIAL";
    type?: "FISH_FARM" | "CROP_FARM" | "LIVESTOCK_FARM" | "RETAIL" | "OFFICE" | "BANKING" | "LEISURE" | "HEALTHCARE" | "HOTEL" | "SHOP" | "SHIPPING_CONTAINER" | "INDOOR" | "BANQUET_HALL" | "BALLROOM" | "COMMUNITY_CENTER" | "CONFERENCE_ROOMS" | "hOTELS" | "NIGHT_CLUBS" | "GARDENS" | "CHURCH" | "STADIA" | "THEATERS" | "HOUSE" | "NEW_DEVELOPMENT" | "BUNGALOW" | "APARTMENT" | "STUDION" | "PENTHOUSE" | "BUILDING_PLOT" | undefined;
    acquisition?: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY" | undefined;
    seating?: number | undefined;
    state?: "FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED" | undefined;
    bedrooms?: number | undefined;
    bathrooms?: number | undefined;
    parkingCapacity?: number | undefined;
    location?: string | undefined;
    createdAt?: Date | undefined;
}
