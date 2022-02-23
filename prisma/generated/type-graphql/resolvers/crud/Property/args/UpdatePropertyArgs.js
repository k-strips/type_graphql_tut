"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyUpdateInput_1 = require("../../../inputs/PropertyUpdateInput");
const PropertyWhereUniqueInput_1 = require("../../../inputs/PropertyWhereUniqueInput");
let UpdatePropertyArgs = class UpdatePropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateInput_1.PropertyUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateInput_1.PropertyUpdateInput)
], UpdatePropertyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], UpdatePropertyArgs.prototype, "where", void 0);
UpdatePropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdatePropertyArgs);
exports.UpdatePropertyArgs = UpdatePropertyArgs;
