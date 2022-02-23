"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAdvertisementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateManyInput_1 = require("../../../inputs/AdvertisementCreateManyInput");
let CreateManyAdvertisementArgs = class CreateManyAdvertisementArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateManyInput_1.AdvertisementCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyAdvertisementArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyAdvertisementArgs.prototype, "skipDuplicates", void 0);
CreateManyAdvertisementArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyAdvertisementArgs);
exports.CreateManyAdvertisementArgs = CreateManyAdvertisementArgs;
