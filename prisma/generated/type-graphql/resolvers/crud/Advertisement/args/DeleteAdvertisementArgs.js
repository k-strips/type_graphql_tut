"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAdvertisementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementWhereUniqueInput_1 = require("../../../inputs/AdvertisementWhereUniqueInput");
let DeleteAdvertisementArgs = class DeleteAdvertisementArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], DeleteAdvertisementArgs.prototype, "where", void 0);
DeleteAdvertisementArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteAdvertisementArgs);
exports.DeleteAdvertisementArgs = DeleteAdvertisementArgs;
