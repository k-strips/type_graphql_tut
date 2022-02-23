import { Property } from "../../../models/Property";
import { Save } from "../../../models/Save";
import { User } from "../../../models/User";
export declare class SaveRelationsResolver {
    User(save: Save, ctx: any): Promise<User | null>;
    Property(save: Save, ctx: any): Promise<Property | null>;
}
