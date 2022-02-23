"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateManyInput_1 = require("../../../inputs/PriceCreateManyInput");
let CreateManyPriceArgs = class CreateManyPriceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceCreateManyInput_1.PriceCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyPriceArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyPriceArgs.prototype, "skipDuplicates", void 0);
CreateManyPriceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyPriceArgs);
exports.CreateManyPriceArgs = CreateManyPriceArgs;
