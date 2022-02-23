"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateManyWithWhereWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceScalarWhereInput_1 = require("../inputs/PriceScalarWhereInput");
const PriceUpdateManyMutationInput_1 = require("../inputs/PriceUpdateManyMutationInput");
let PriceUpdateManyWithWhereWithoutProperty_RequestInput = class PriceUpdateManyWithWhereWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceScalarWhereInput_1.PriceScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceScalarWhereInput_1.PriceScalarWhereInput)
], PriceUpdateManyWithWhereWithoutProperty_RequestInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateManyMutationInput_1.PriceUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateManyMutationInput_1.PriceUpdateManyMutationInput)
], PriceUpdateManyWithWhereWithoutProperty_RequestInput.prototype, "data", void 0);
PriceUpdateManyWithWhereWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceUpdateManyWithWhereWithoutProperty_RequestInput", {
        isAbstract: true
    })
], PriceUpdateManyWithWhereWithoutProperty_RequestInput);
exports.PriceUpdateManyWithWhereWithoutProperty_RequestInput = PriceUpdateManyWithWhereWithoutProperty_RequestInput;
