"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateOrConnectWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateWithoutPropertyInput_1 = require("../inputs/AdvertisementCreateWithoutPropertyInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementCreateOrConnectWithoutPropertyInput = class AdvertisementCreateOrConnectWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementCreateOrConnectWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateWithoutPropertyInput_1.AdvertisementCreateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateWithoutPropertyInput_1.AdvertisementCreateWithoutPropertyInput)
], AdvertisementCreateOrConnectWithoutPropertyInput.prototype, "create", void 0);
AdvertisementCreateOrConnectWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateOrConnectWithoutPropertyInput", {
        isAbstract: true
    })
], AdvertisementCreateOrConnectWithoutPropertyInput);
exports.AdvertisementCreateOrConnectWithoutPropertyInput = AdvertisementCreateOrConnectWithoutPropertyInput;
