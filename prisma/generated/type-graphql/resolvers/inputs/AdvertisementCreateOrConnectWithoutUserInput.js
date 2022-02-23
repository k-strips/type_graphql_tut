"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateWithoutUserInput_1 = require("../inputs/AdvertisementCreateWithoutUserInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementCreateOrConnectWithoutUserInput = class AdvertisementCreateOrConnectWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementCreateOrConnectWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateWithoutUserInput_1.AdvertisementCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateWithoutUserInput_1.AdvertisementCreateWithoutUserInput)
], AdvertisementCreateOrConnectWithoutUserInput.prototype, "create", void 0);
AdvertisementCreateOrConnectWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], AdvertisementCreateOrConnectWithoutUserInput);
exports.AdvertisementCreateOrConnectWithoutUserInput = AdvertisementCreateOrConnectWithoutUserInput;
