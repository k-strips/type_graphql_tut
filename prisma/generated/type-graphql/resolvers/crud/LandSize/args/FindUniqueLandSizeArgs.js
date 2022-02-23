"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLandSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeWhereUniqueInput_1 = require("../../../inputs/LandSizeWhereUniqueInput");
let FindUniqueLandSizeArgs = class FindUniqueLandSizeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], FindUniqueLandSizeArgs.prototype, "where", void 0);
FindUniqueLandSizeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueLandSizeArgs);
exports.FindUniqueLandSizeArgs = FindUniqueLandSizeArgs;
