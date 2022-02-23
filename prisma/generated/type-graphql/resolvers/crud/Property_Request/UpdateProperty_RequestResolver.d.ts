import { GraphQLResolveInfo } from "graphql";
import { UpdateProperty_RequestArgs } from "./args/UpdateProperty_RequestArgs";
import { Property_Request } from "../../../models/Property_Request";
export declare class UpdateProperty_RequestResolver {
    updateProperty_Request(ctx: any, info: GraphQLResolveInfo, args: UpdateProperty_RequestArgs): Promise<Property_Request | null>;
}
