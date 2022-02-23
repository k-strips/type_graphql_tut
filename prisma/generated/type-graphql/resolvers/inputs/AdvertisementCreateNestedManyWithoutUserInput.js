"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateManyUserInputEnvelope_1 = require("../inputs/AdvertisementCreateManyUserInputEnvelope");
const AdvertisementCreateOrConnectWithoutUserInput_1 = require("../inputs/AdvertisementCreateOrConnectWithoutUserInput");
const AdvertisementCreateWithoutUserInput_1 = require("../inputs/AdvertisementCreateWithoutUserInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementCreateNestedManyWithoutUserInput = class AdvertisementCreateNestedManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateWithoutUserInput_1.AdvertisementCreateWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateNestedManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateOrConnectWithoutUserInput_1.AdvertisementCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateManyUserInputEnvelope_1.AdvertisementCreateManyUserInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateManyUserInputEnvelope_1.AdvertisementCreateManyUserInputEnvelope)
], AdvertisementCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
AdvertisementCreateNestedManyWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], AdvertisementCreateNestedManyWithoutUserInput);
exports.AdvertisementCreateNestedManyWithoutUserInput = AdvertisementCreateNestedManyWithoutUserInput;
