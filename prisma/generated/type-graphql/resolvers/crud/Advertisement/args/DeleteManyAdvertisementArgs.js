"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAdvertisementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementWhereInput_1 = require("../../../inputs/AdvertisementWhereInput");
let DeleteManyAdvertisementArgs = class DeleteManyAdvertisementArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereInput_1.AdvertisementWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereInput_1.AdvertisementWhereInput)
], DeleteManyAdvertisementArgs.prototype, "where", void 0);
DeleteManyAdvertisementArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyAdvertisementArgs);
exports.DeleteManyAdvertisementArgs = DeleteManyAdvertisementArgs;
