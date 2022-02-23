"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateamenitiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PropertyUpdateamenitiesInput = class PropertyUpdateamenitiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateamenitiesInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateamenitiesInput.prototype, "push", void 0);
PropertyUpdateamenitiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateamenitiesInput", {
        isAbstract: true
    })
], PropertyUpdateamenitiesInput);
exports.PropertyUpdateamenitiesInput = PropertyUpdateamenitiesInput;
