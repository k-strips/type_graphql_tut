"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpsertWithWhereUniqueWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutOwnerInput_1 = require("../inputs/PropertyCreateWithoutOwnerInput");
const PropertyUpdateWithoutOwnerInput_1 = require("../inputs/PropertyUpdateWithoutOwnerInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyUpsertWithWhereUniqueWithoutOwnerInput = class PropertyUpsertWithWhereUniqueWithoutOwnerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyUpsertWithWhereUniqueWithoutOwnerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutOwnerInput_1.PropertyUpdateWithoutOwnerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutOwnerInput_1.PropertyUpdateWithoutOwnerInput)
], PropertyUpsertWithWhereUniqueWithoutOwnerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutOwnerInput_1.PropertyCreateWithoutOwnerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutOwnerInput_1.PropertyCreateWithoutOwnerInput)
], PropertyUpsertWithWhereUniqueWithoutOwnerInput.prototype, "create", void 0);
PropertyUpsertWithWhereUniqueWithoutOwnerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpsertWithWhereUniqueWithoutOwnerInput", {
        isAbstract: true
    })
], PropertyUpsertWithWhereUniqueWithoutOwnerInput);
exports.PropertyUpsertWithWhereUniqueWithoutOwnerInput = PropertyUpsertWithWhereUniqueWithoutOwnerInput;
