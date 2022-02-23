"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateNestedManyWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateManyPropertyInputEnvelope_1 = require("../inputs/AdvertisementCreateManyPropertyInputEnvelope");
const AdvertisementCreateOrConnectWithoutPropertyInput_1 = require("../inputs/AdvertisementCreateOrConnectWithoutPropertyInput");
const AdvertisementCreateWithoutPropertyInput_1 = require("../inputs/AdvertisementCreateWithoutPropertyInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementCreateNestedManyWithoutPropertyInput = class AdvertisementCreateNestedManyWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateWithoutPropertyInput_1.AdvertisementCreateWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateNestedManyWithoutPropertyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateOrConnectWithoutPropertyInput_1.AdvertisementCreateOrConnectWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateNestedManyWithoutPropertyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateManyPropertyInputEnvelope_1.AdvertisementCreateManyPropertyInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateManyPropertyInputEnvelope_1.AdvertisementCreateManyPropertyInputEnvelope)
], AdvertisementCreateNestedManyWithoutPropertyInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateNestedManyWithoutPropertyInput.prototype, "connect", void 0);
AdvertisementCreateNestedManyWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateNestedManyWithoutPropertyInput", {
        isAbstract: true
    })
], AdvertisementCreateNestedManyWithoutPropertyInput);
exports.AdvertisementCreateNestedManyWithoutPropertyInput = AdvertisementCreateNestedManyWithoutPropertyInput;
