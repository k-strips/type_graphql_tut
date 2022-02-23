"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateWithWhereUniqueWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyUpdateWithoutOwnerInput_1 = require("../inputs/PropertyUpdateWithoutOwnerInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyUpdateWithWhereUniqueWithoutOwnerInput = class PropertyUpdateWithWhereUniqueWithoutOwnerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyUpdateWithWhereUniqueWithoutOwnerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutOwnerInput_1.PropertyUpdateWithoutOwnerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutOwnerInput_1.PropertyUpdateWithoutOwnerInput)
], PropertyUpdateWithWhereUniqueWithoutOwnerInput.prototype, "data", void 0);
PropertyUpdateWithWhereUniqueWithoutOwnerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateWithWhereUniqueWithoutOwnerInput", {
        isAbstract: true
    })
], PropertyUpdateWithWhereUniqueWithoutOwnerInput);
exports.PropertyUpdateWithWhereUniqueWithoutOwnerInput = PropertyUpdateWithWhereUniqueWithoutOwnerInput;
