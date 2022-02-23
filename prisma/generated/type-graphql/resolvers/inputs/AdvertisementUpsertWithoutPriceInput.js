"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpsertWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateWithoutPriceInput_1 = require("../inputs/AdvertisementCreateWithoutPriceInput");
const AdvertisementUpdateWithoutPriceInput_1 = require("../inputs/AdvertisementUpdateWithoutPriceInput");
let AdvertisementUpsertWithoutPriceInput = class AdvertisementUpsertWithoutPriceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateWithoutPriceInput_1.AdvertisementUpdateWithoutPriceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateWithoutPriceInput_1.AdvertisementUpdateWithoutPriceInput)
], AdvertisementUpsertWithoutPriceInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateWithoutPriceInput_1.AdvertisementCreateWithoutPriceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateWithoutPriceInput_1.AdvertisementCreateWithoutPriceInput)
], AdvertisementUpsertWithoutPriceInput.prototype, "create", void 0);
AdvertisementUpsertWithoutPriceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpsertWithoutPriceInput", {
        isAbstract: true
    })
], AdvertisementUpsertWithoutPriceInput);
exports.AdvertisementUpsertWithoutPriceInput = AdvertisementUpsertWithoutPriceInput;
