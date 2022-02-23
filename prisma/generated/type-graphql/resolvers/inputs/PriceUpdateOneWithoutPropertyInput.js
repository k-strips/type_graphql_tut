"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateOneWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateOrConnectWithoutPropertyInput_1 = require("../inputs/PriceCreateOrConnectWithoutPropertyInput");
const PriceCreateWithoutPropertyInput_1 = require("../inputs/PriceCreateWithoutPropertyInput");
const PriceUpdateWithoutPropertyInput_1 = require("../inputs/PriceUpdateWithoutPropertyInput");
const PriceUpsertWithoutPropertyInput_1 = require("../inputs/PriceUpsertWithoutPropertyInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateOneWithoutPropertyInput = class PriceUpdateOneWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateWithoutPropertyInput_1.PriceCreateWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateWithoutPropertyInput_1.PriceCreateWithoutPropertyInput)
], PriceUpdateOneWithoutPropertyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutPropertyInput_1.PriceCreateOrConnectWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateOrConnectWithoutPropertyInput_1.PriceCreateOrConnectWithoutPropertyInput)
], PriceUpdateOneWithoutPropertyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpsertWithoutPropertyInput_1.PriceUpsertWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpsertWithoutPropertyInput_1.PriceUpsertWithoutPropertyInput)
], PriceUpdateOneWithoutPropertyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PriceUpdateOneWithoutPropertyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PriceUpdateOneWithoutPropertyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateOneWithoutPropertyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateWithoutPropertyInput_1.PriceUpdateWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateWithoutPropertyInput_1.PriceUpdateWithoutPropertyInput)
], PriceUpdateOneWithoutPropertyInput.prototype, "update", void 0);
PriceUpdateOneWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceUpdateOneWithoutPropertyInput", {
        isAbstract: true
    })
], PriceUpdateOneWithoutPropertyInput);
exports.PriceUpdateOneWithoutPropertyInput = PriceUpdateOneWithoutPropertyInput;
