"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdvertisementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateInput_1 = require("../../../inputs/AdvertisementCreateInput");
let CreateAdvertisementArgs = class CreateAdvertisementArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateInput_1.AdvertisementCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateInput_1.AdvertisementCreateInput)
], CreateAdvertisementArgs.prototype, "data", void 0);
CreateAdvertisementArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateAdvertisementArgs);
exports.CreateAdvertisementArgs = CreateAdvertisementArgs;
