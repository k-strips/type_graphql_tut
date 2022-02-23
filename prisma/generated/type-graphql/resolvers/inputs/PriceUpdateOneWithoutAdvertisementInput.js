"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateOneWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateOrConnectWithoutAdvertisementInput_1 = require("../inputs/PriceCreateOrConnectWithoutAdvertisementInput");
const PriceCreateWithoutAdvertisementInput_1 = require("../inputs/PriceCreateWithoutAdvertisementInput");
const PriceUpdateWithoutAdvertisementInput_1 = require("../inputs/PriceUpdateWithoutAdvertisementInput");
const PriceUpsertWithoutAdvertisementInput_1 = require("../inputs/PriceUpsertWithoutAdvertisementInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateOneWithoutAdvertisementInput = class PriceUpdateOneWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateWithoutAdvertisementInput_1.PriceCreateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateWithoutAdvertisementInput_1.PriceCreateWithoutAdvertisementInput)
], PriceUpdateOneWithoutAdvertisementInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutAdvertisementInput_1.PriceCreateOrConnectWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateOrConnectWithoutAdvertisementInput_1.PriceCreateOrConnectWithoutAdvertisementInput)
], PriceUpdateOneWithoutAdvertisementInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpsertWithoutAdvertisementInput_1.PriceUpsertWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpsertWithoutAdvertisementInput_1.PriceUpsertWithoutAdvertisementInput)
], PriceUpdateOneWithoutAdvertisementInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PriceUpdateOneWithoutAdvertisementInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PriceUpdateOneWithoutAdvertisementInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateOneWithoutAdvertisementInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateWithoutAdvertisementInput_1.PriceUpdateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateWithoutAdvertisementInput_1.PriceUpdateWithoutAdvertisementInput)
], PriceUpdateOneWithoutAdvertisementInput.prototype, "update", void 0);
PriceUpdateOneWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceUpdateOneWithoutAdvertisementInput", {
        isAbstract: true
    })
], PriceUpdateOneWithoutAdvertisementInput);
exports.PriceUpdateOneWithoutAdvertisementInput = PriceUpdateOneWithoutAdvertisementInput;
