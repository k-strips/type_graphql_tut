"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateManyWithWhereWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementScalarWhereInput_1 = require("../inputs/AdvertisementScalarWhereInput");
const AdvertisementUpdateManyMutationInput_1 = require("../inputs/AdvertisementUpdateManyMutationInput");
let AdvertisementUpdateManyWithWhereWithoutPropertyInput = class AdvertisementUpdateManyWithWhereWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementScalarWhereInput_1.AdvertisementScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementScalarWhereInput_1.AdvertisementScalarWhereInput)
], AdvertisementUpdateManyWithWhereWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateManyMutationInput_1.AdvertisementUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateManyMutationInput_1.AdvertisementUpdateManyMutationInput)
], AdvertisementUpdateManyWithWhereWithoutPropertyInput.prototype, "data", void 0);
AdvertisementUpdateManyWithWhereWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateManyWithWhereWithoutPropertyInput", {
        isAbstract: true
    })
], AdvertisementUpdateManyWithWhereWithoutPropertyInput);
exports.AdvertisementUpdateManyWithWhereWithoutPropertyInput = AdvertisementUpdateManyWithWhereWithoutPropertyInput;
