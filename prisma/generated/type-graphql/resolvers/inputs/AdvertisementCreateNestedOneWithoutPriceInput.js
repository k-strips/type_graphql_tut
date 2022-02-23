"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateNestedOneWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateOrConnectWithoutPriceInput_1 = require("../inputs/AdvertisementCreateOrConnectWithoutPriceInput");
const AdvertisementCreateWithoutPriceInput_1 = require("../inputs/AdvertisementCreateWithoutPriceInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementCreateNestedOneWithoutPriceInput = class AdvertisementCreateNestedOneWithoutPriceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateWithoutPriceInput_1.AdvertisementCreateWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateWithoutPriceInput_1.AdvertisementCreateWithoutPriceInput)
], AdvertisementCreateNestedOneWithoutPriceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateOrConnectWithoutPriceInput_1.AdvertisementCreateOrConnectWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateOrConnectWithoutPriceInput_1.AdvertisementCreateOrConnectWithoutPriceInput)
], AdvertisementCreateNestedOneWithoutPriceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementCreateNestedOneWithoutPriceInput.prototype, "connect", void 0);
AdvertisementCreateNestedOneWithoutPriceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateNestedOneWithoutPriceInput", {
        isAbstract: true
    })
], AdvertisementCreateNestedOneWithoutPriceInput);
exports.AdvertisementCreateNestedOneWithoutPriceInput = AdvertisementCreateNestedOneWithoutPriceInput;
