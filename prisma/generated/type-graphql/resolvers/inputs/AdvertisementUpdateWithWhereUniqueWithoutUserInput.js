"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementUpdateWithoutUserInput_1 = require("../inputs/AdvertisementUpdateWithoutUserInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementUpdateWithWhereUniqueWithoutUserInput = class AdvertisementUpdateWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateWithoutUserInput_1.AdvertisementUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateWithoutUserInput_1.AdvertisementUpdateWithoutUserInput)
], AdvertisementUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
AdvertisementUpdateWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], AdvertisementUpdateWithWhereUniqueWithoutUserInput);
exports.AdvertisementUpdateWithWhereUniqueWithoutUserInput = AdvertisementUpdateWithWhereUniqueWithoutUserInput;
