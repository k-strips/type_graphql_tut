"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpsertWithWhereUniqueWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateWithoutPropertyInput_1 = require("../inputs/AdvertisementCreateWithoutPropertyInput");
const AdvertisementUpdateWithoutPropertyInput_1 = require("../inputs/AdvertisementUpdateWithoutPropertyInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementUpsertWithWhereUniqueWithoutPropertyInput = class AdvertisementUpsertWithWhereUniqueWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementUpsertWithWhereUniqueWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateWithoutPropertyInput_1.AdvertisementUpdateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateWithoutPropertyInput_1.AdvertisementUpdateWithoutPropertyInput)
], AdvertisementUpsertWithWhereUniqueWithoutPropertyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateWithoutPropertyInput_1.AdvertisementCreateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateWithoutPropertyInput_1.AdvertisementCreateWithoutPropertyInput)
], AdvertisementUpsertWithWhereUniqueWithoutPropertyInput.prototype, "create", void 0);
AdvertisementUpsertWithWhereUniqueWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpsertWithWhereUniqueWithoutPropertyInput", {
        isAbstract: true
    })
], AdvertisementUpsertWithWhereUniqueWithoutPropertyInput);
exports.AdvertisementUpsertWithWhereUniqueWithoutPropertyInput = AdvertisementUpsertWithWhereUniqueWithoutPropertyInput;
