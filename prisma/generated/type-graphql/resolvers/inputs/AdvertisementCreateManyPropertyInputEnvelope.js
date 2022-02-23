"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateManyPropertyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateManyPropertyInput_1 = require("../inputs/AdvertisementCreateManyPropertyInput");
let AdvertisementCreateManyPropertyInputEnvelope = class AdvertisementCreateManyPropertyInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateManyPropertyInput_1.AdvertisementCreateManyPropertyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateManyPropertyInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateManyPropertyInputEnvelope.prototype, "skipDuplicates", void 0);
AdvertisementCreateManyPropertyInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateManyPropertyInputEnvelope", {
        isAbstract: true
    })
], AdvertisementCreateManyPropertyInputEnvelope);
exports.AdvertisementCreateManyPropertyInputEnvelope = AdvertisementCreateManyPropertyInputEnvelope;
