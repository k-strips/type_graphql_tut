"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdvertisementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementUpdateInput_1 = require("../../../inputs/AdvertisementUpdateInput");
const AdvertisementWhereUniqueInput_1 = require("../../../inputs/AdvertisementWhereUniqueInput");
let UpdateAdvertisementArgs = class UpdateAdvertisementArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateInput_1.AdvertisementUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateInput_1.AdvertisementUpdateInput)
], UpdateAdvertisementArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], UpdateAdvertisementArgs.prototype, "where", void 0);
UpdateAdvertisementArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateAdvertisementArgs);
exports.UpdateAdvertisementArgs = UpdateAdvertisementArgs;
