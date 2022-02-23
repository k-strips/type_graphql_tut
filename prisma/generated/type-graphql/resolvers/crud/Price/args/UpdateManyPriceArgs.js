"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceUpdateManyMutationInput_1 = require("../../../inputs/PriceUpdateManyMutationInput");
const PriceWhereInput_1 = require("../../../inputs/PriceWhereInput");
let UpdateManyPriceArgs = class UpdateManyPriceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateManyMutationInput_1.PriceUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateManyMutationInput_1.PriceUpdateManyMutationInput)
], UpdateManyPriceArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereInput_1.PriceWhereInput)
], UpdateManyPriceArgs.prototype, "where", void 0);
UpdateManyPriceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyPriceArgs);
exports.UpdateManyPriceArgs = UpdateManyPriceArgs;
