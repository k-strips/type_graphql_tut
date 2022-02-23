"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAdvertisementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateInput_1 = require("../../../inputs/AdvertisementCreateInput");
const AdvertisementUpdateInput_1 = require("../../../inputs/AdvertisementUpdateInput");
const AdvertisementWhereUniqueInput_1 = require("../../../inputs/AdvertisementWhereUniqueInput");
let UpsertAdvertisementArgs = class UpsertAdvertisementArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], UpsertAdvertisementArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateInput_1.AdvertisementCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateInput_1.AdvertisementCreateInput)
], UpsertAdvertisementArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateInput_1.AdvertisementUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateInput_1.AdvertisementUpdateInput)
], UpsertAdvertisementArgs.prototype, "update", void 0);
UpsertAdvertisementArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertAdvertisementArgs);
exports.UpsertAdvertisementArgs = UpsertAdvertisementArgs;
