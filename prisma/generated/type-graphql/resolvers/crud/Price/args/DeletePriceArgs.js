"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceWhereUniqueInput_1 = require("../../../inputs/PriceWhereUniqueInput");
let DeletePriceArgs = class DeletePriceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], DeletePriceArgs.prototype, "where", void 0);
DeletePriceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeletePriceArgs);
exports.DeletePriceArgs = DeletePriceArgs;
