"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateManyWithWhereWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementScalarWhereInput_1 = require("../inputs/AdvertisementScalarWhereInput");
const AdvertisementUpdateManyMutationInput_1 = require("../inputs/AdvertisementUpdateManyMutationInput");
let AdvertisementUpdateManyWithWhereWithoutOrganizationInput = class AdvertisementUpdateManyWithWhereWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementScalarWhereInput_1.AdvertisementScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementScalarWhereInput_1.AdvertisementScalarWhereInput)
], AdvertisementUpdateManyWithWhereWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateManyMutationInput_1.AdvertisementUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateManyMutationInput_1.AdvertisementUpdateManyMutationInput)
], AdvertisementUpdateManyWithWhereWithoutOrganizationInput.prototype, "data", void 0);
AdvertisementUpdateManyWithWhereWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateManyWithWhereWithoutOrganizationInput", {
        isAbstract: true
    })
], AdvertisementUpdateManyWithWhereWithoutOrganizationInput);
exports.AdvertisementUpdateManyWithWhereWithoutOrganizationInput = AdvertisementUpdateManyWithWhereWithoutOrganizationInput;
