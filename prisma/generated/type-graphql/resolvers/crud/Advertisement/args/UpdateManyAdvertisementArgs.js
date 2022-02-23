"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAdvertisementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementUpdateManyMutationInput_1 = require("../../../inputs/AdvertisementUpdateManyMutationInput");
const AdvertisementWhereInput_1 = require("../../../inputs/AdvertisementWhereInput");
let UpdateManyAdvertisementArgs = class UpdateManyAdvertisementArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateManyMutationInput_1.AdvertisementUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateManyMutationInput_1.AdvertisementUpdateManyMutationInput)
], UpdateManyAdvertisementArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereInput_1.AdvertisementWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereInput_1.AdvertisementWhereInput)
], UpdateManyAdvertisementArgs.prototype, "where", void 0);
UpdateManyAdvertisementArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyAdvertisementArgs);
exports.UpdateManyAdvertisementArgs = UpdateManyAdvertisementArgs;
