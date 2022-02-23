"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceUpdateInput_1 = require("../../../inputs/PriceUpdateInput");
const PriceWhereUniqueInput_1 = require("../../../inputs/PriceWhereUniqueInput");
let UpdatePriceArgs = class UpdatePriceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateInput_1.PriceUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateInput_1.PriceUpdateInput)
], UpdatePriceArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], UpdatePriceArgs.prototype, "where", void 0);
UpdatePriceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdatePriceArgs);
exports.UpdatePriceArgs = UpdatePriceArgs;
