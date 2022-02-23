"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateManyUserInput_1 = require("../inputs/AdvertisementCreateManyUserInput");
let AdvertisementCreateManyUserInputEnvelope = class AdvertisementCreateManyUserInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateManyUserInput_1.AdvertisementCreateManyUserInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateManyUserInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
AdvertisementCreateManyUserInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], AdvertisementCreateManyUserInputEnvelope);
exports.AdvertisementCreateManyUserInputEnvelope = AdvertisementCreateManyUserInputEnvelope;
