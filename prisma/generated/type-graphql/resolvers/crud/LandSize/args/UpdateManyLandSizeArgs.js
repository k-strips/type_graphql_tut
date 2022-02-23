"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLandSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeUpdateManyMutationInput_1 = require("../../../inputs/LandSizeUpdateManyMutationInput");
const LandSizeWhereInput_1 = require("../../../inputs/LandSizeWhereInput");
let UpdateManyLandSizeArgs = class UpdateManyLandSizeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpdateManyMutationInput_1.LandSizeUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpdateManyMutationInput_1.LandSizeUpdateManyMutationInput)
], UpdateManyLandSizeArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereInput_1.LandSizeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereInput_1.LandSizeWhereInput)
], UpdateManyLandSizeArgs.prototype, "where", void 0);
UpdateManyLandSizeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyLandSizeArgs);
exports.UpdateManyLandSizeArgs = UpdateManyLandSizeArgs;
