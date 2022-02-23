"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AdvertisementWhereUniqueInput = class AdvertisementWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementWhereUniqueInput.prototype, "id", void 0);
AdvertisementWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementWhereUniqueInput", {
        isAbstract: true
    })
], AdvertisementWhereUniqueInput);
exports.AdvertisementWhereUniqueInput = AdvertisementWhereUniqueInput;
