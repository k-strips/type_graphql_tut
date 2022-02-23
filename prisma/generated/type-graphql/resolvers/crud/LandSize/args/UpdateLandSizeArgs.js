"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLandSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeUpdateInput_1 = require("../../../inputs/LandSizeUpdateInput");
const LandSizeWhereUniqueInput_1 = require("../../../inputs/LandSizeWhereUniqueInput");
let UpdateLandSizeArgs = class UpdateLandSizeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpdateInput_1.LandSizeUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpdateInput_1.LandSizeUpdateInput)
], UpdateLandSizeArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], UpdateLandSizeArgs.prototype, "where", void 0);
UpdateLandSizeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateLandSizeArgs);
exports.UpdateLandSizeArgs = UpdateLandSizeArgs;
