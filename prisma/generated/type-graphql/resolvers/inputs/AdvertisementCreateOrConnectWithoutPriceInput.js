"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateOrConnectWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateWithoutPriceInput_1 = require("../inputs/AdvertisementCreateWithoutPriceInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementCreateOrConnectWithoutPriceInput = class AdvertisementCreateOrConnectWithoutPriceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementCreateOrConnectWithoutPriceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateWithoutPriceInput_1.AdvertisementCreateWithoutPriceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateWithoutPriceInput_1.AdvertisementCreateWithoutPriceInput)
], AdvertisementCreateOrConnectWithoutPriceInput.prototype, "create", void 0);
AdvertisementCreateOrConnectWithoutPriceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateOrConnectWithoutPriceInput", {
        isAbstract: true
    })
], AdvertisementCreateOrConnectWithoutPriceInput);
exports.AdvertisementCreateOrConnectWithoutPriceInput = AdvertisementCreateOrConnectWithoutPriceInput;
