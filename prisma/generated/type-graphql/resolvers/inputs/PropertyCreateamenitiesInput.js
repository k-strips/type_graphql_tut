"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateamenitiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PropertyCreateamenitiesInput = class PropertyCreateamenitiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyCreateamenitiesInput.prototype, "set", void 0);
PropertyCreateamenitiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateamenitiesInput", {
        isAbstract: true
    })
], PropertyCreateamenitiesInput);
exports.PropertyCreateamenitiesInput = PropertyCreateamenitiesInput;
