"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLandSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeWhereUniqueInput_1 = require("../../../inputs/LandSizeWhereUniqueInput");
let DeleteLandSizeArgs = class DeleteLandSizeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], DeleteLandSizeArgs.prototype, "where", void 0);
DeleteLandSizeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteLandSizeArgs);
exports.DeleteLandSizeArgs = DeleteLandSizeArgs;
