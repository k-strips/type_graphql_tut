"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProperty_RequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestUpdateInput_1 = require("../../../inputs/Property_RequestUpdateInput");
const Property_RequestWhereUniqueInput_1 = require("../../../inputs/Property_RequestWhereUniqueInput");
let UpdateProperty_RequestArgs = class UpdateProperty_RequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateInput_1.Property_RequestUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateInput_1.Property_RequestUpdateInput)
], UpdateProperty_RequestArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], UpdateProperty_RequestArgs.prototype, "where", void 0);
UpdateProperty_RequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateProperty_RequestArgs);
exports.UpdateProperty_RequestArgs = UpdateProperty_RequestArgs;
