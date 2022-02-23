"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateWithoutUserInput_1 = require("../inputs/AdvertisementCreateWithoutUserInput");
const AdvertisementUpdateWithoutUserInput_1 = require("../inputs/AdvertisementUpdateWithoutUserInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementUpsertWithWhereUniqueWithoutUserInput = class AdvertisementUpsertWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateWithoutUserInput_1.AdvertisementUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateWithoutUserInput_1.AdvertisementUpdateWithoutUserInput)
], AdvertisementUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateWithoutUserInput_1.AdvertisementCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateWithoutUserInput_1.AdvertisementCreateWithoutUserInput)
], AdvertisementUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
AdvertisementUpsertWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], AdvertisementUpsertWithWhereUniqueWithoutUserInput);
exports.AdvertisementUpsertWithWhereUniqueWithoutUserInput = AdvertisementUpsertWithWhereUniqueWithoutUserInput;
