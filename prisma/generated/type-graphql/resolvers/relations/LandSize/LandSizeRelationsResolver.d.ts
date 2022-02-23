import { LandSize } from "../../../models/LandSize";
import { Property } from "../../../models/Property";
import { Property_Request } from "../../../models/Property_Request";
export declare class LandSizeRelationsResolver {
    Property(landSize: LandSize, ctx: any): Promise<Property | null>;
    Property_Request(landSize: LandSize, ctx: any): Promise<Property_Request | null>;
}
