"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementScalarWhereInput_1 = require("../inputs/AdvertisementScalarWhereInput");
const AdvertisementUpdateManyMutationInput_1 = require("../inputs/AdvertisementUpdateManyMutationInput");
let AdvertisementUpdateManyWithWhereWithoutUserInput = class AdvertisementUpdateManyWithWhereWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementScalarWhereInput_1.AdvertisementScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementScalarWhereInput_1.AdvertisementScalarWhereInput)
], AdvertisementUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateManyMutationInput_1.AdvertisementUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateManyMutationInput_1.AdvertisementUpdateManyMutationInput)
], AdvertisementUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
AdvertisementUpdateManyWithWhereWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], AdvertisementUpdateManyWithWhereWithoutUserInput);
exports.AdvertisementUpdateManyWithWhereWithoutUserInput = AdvertisementUpdateManyWithWhereWithoutUserInput;
