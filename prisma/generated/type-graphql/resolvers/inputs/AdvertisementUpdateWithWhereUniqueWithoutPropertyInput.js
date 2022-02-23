"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateWithWhereUniqueWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementUpdateWithoutPropertyInput_1 = require("../inputs/AdvertisementUpdateWithoutPropertyInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementUpdateWithWhereUniqueWithoutPropertyInput = class AdvertisementUpdateWithWhereUniqueWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementUpdateWithWhereUniqueWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateWithoutPropertyInput_1.AdvertisementUpdateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateWithoutPropertyInput_1.AdvertisementUpdateWithoutPropertyInput)
], AdvertisementUpdateWithWhereUniqueWithoutPropertyInput.prototype, "data", void 0);
AdvertisementUpdateWithWhereUniqueWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateWithWhereUniqueWithoutPropertyInput", {
        isAbstract: true
    })
], AdvertisementUpdateWithWhereUniqueWithoutPropertyInput);
exports.AdvertisementUpdateWithWhereUniqueWithoutPropertyInput = AdvertisementUpdateWithWhereUniqueWithoutPropertyInput;
