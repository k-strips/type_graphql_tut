"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateOneWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateOrConnectWithoutPriceInput_1 = require("../inputs/AdvertisementCreateOrConnectWithoutPriceInput");
const AdvertisementCreateWithoutPriceInput_1 = require("../inputs/AdvertisementCreateWithoutPriceInput");
const AdvertisementUpdateWithoutPriceInput_1 = require("../inputs/AdvertisementUpdateWithoutPriceInput");
const AdvertisementUpsertWithoutPriceInput_1 = require("../inputs/AdvertisementUpsertWithoutPriceInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementUpdateOneWithoutPriceInput = class AdvertisementUpdateOneWithoutPriceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateWithoutPriceInput_1.AdvertisementCreateWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateWithoutPriceInput_1.AdvertisementCreateWithoutPriceInput)
], AdvertisementUpdateOneWithoutPriceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateOrConnectWithoutPriceInput_1.AdvertisementCreateOrConnectWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateOrConnectWithoutPriceInput_1.AdvertisementCreateOrConnectWithoutPriceInput)
], AdvertisementUpdateOneWithoutPriceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpsertWithoutPriceInput_1.AdvertisementUpsertWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpsertWithoutPriceInput_1.AdvertisementUpsertWithoutPriceInput)
], AdvertisementUpdateOneWithoutPriceInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementUpdateOneWithoutPriceInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementUpdateOneWithoutPriceInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementUpdateOneWithoutPriceInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateWithoutPriceInput_1.AdvertisementUpdateWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateWithoutPriceInput_1.AdvertisementUpdateWithoutPriceInput)
], AdvertisementUpdateOneWithoutPriceInput.prototype, "update", void 0);
AdvertisementUpdateOneWithoutPriceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateOneWithoutPriceInput", {
        isAbstract: true
    })
], AdvertisementUpdateOneWithoutPriceInput);
exports.AdvertisementUpdateOneWithoutPriceInput = AdvertisementUpdateOneWithoutPriceInput;
