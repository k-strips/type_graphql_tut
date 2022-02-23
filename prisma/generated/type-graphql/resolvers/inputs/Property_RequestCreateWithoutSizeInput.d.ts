import { PriceCreateNestedManyWithoutProperty_RequestInput } from "../inputs/PriceCreateNestedManyWithoutProperty_RequestInput";
import { Property_RequestCreateamenitiesInput } from "../inputs/Property_RequestCreateamenitiesInput";
import { UserCreateNestedOneWithoutRequestInput } from "../inputs/UserCreateNestedOneWithoutRequestInput";
export declare class Property_RequestCreateWithoutSizeInput {
    id?: string | undefined;
    type: "FISH_FARM" | "CROP_FARM" | "LIVESTOCK_FARM" | "RETAIL" | "OFFICE" | "BANKING" | "LEISURE" | "HEALTHCARE" | "HOTEL" | "SHOP" | "SHIPPING_CONTAINER" | "INDOOR" | "BANQUET_HALL" | "BALLROOM" | "COMMUNITY_CENTER" | "CONFERENCE_ROOMS" | "hOTELS" | "NIGHT_CLUBS" | "GARDENS" | "CHURCH" | "STADIA" | "THEATERS" | "HOUSE" | "NEW_DEVELOPMENT" | "BUNGALOW" | "APARTMENT" | "STUDION" | "PENTHOUSE" | "BUILDING_PLOT";
    acquisition: "BUY" | "RENT" | "SHORT_STAY" | "LONG_STAY";
    state?: "FURNISHED" | "NOT_FURNISHED" | "PARTLY_FURNISHED" | undefined;
    priceRange?: PriceCreateNestedManyWithoutProperty_RequestInput | undefined;
    amenities?: Property_RequestCreateamenitiesInput | undefined;
    parkingCapacity?: number | undefined;
    seating?: number | undefined;
    bedrooms?: number | undefined;
    bathrooms?: number | undefined;
    additionalInfo?: string | undefined;
    region?: string | undefined;
    city?: string | undefined;
    town?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user?: UserCreateNestedOneWithoutRequestInput | undefined;
}
