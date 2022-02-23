"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpsertWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutLikesInput_1 = require("../inputs/PropertyCreateWithoutLikesInput");
const PropertyUpdateWithoutLikesInput_1 = require("../inputs/PropertyUpdateWithoutLikesInput");
let PropertyUpsertWithoutLikesInput = class PropertyUpsertWithoutLikesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutLikesInput_1.PropertyUpdateWithoutLikesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutLikesInput_1.PropertyUpdateWithoutLikesInput)
], PropertyUpsertWithoutLikesInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutLikesInput_1.PropertyCreateWithoutLikesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutLikesInput_1.PropertyCreateWithoutLikesInput)
], PropertyUpsertWithoutLikesInput.prototype, "create", void 0);
PropertyUpsertWithoutLikesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpsertWithoutLikesInput", {
        isAbstract: true
    })
], PropertyUpsertWithoutLikesInput);
exports.PropertyUpsertWithoutLikesInput = PropertyUpsertWithoutLikesInput;
