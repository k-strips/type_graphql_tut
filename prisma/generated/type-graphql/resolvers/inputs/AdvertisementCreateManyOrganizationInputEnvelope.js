"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateManyOrganizationInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateManyOrganizationInput_1 = require("../inputs/AdvertisementCreateManyOrganizationInput");
let AdvertisementCreateManyOrganizationInputEnvelope = class AdvertisementCreateManyOrganizationInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateManyOrganizationInput_1.AdvertisementCreateManyOrganizationInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateManyOrganizationInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateManyOrganizationInputEnvelope.prototype, "skipDuplicates", void 0);
AdvertisementCreateManyOrganizationInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateManyOrganizationInputEnvelope", {
        isAbstract: true
    })
], AdvertisementCreateManyOrganizationInputEnvelope);
exports.AdvertisementCreateManyOrganizationInputEnvelope = AdvertisementCreateManyOrganizationInputEnvelope;
