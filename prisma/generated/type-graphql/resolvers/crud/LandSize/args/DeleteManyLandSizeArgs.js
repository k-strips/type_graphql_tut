"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLandSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeWhereInput_1 = require("../../../inputs/LandSizeWhereInput");
let DeleteManyLandSizeArgs = class DeleteManyLandSizeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereInput_1.LandSizeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereInput_1.LandSizeWhereInput)
], DeleteManyLandSizeArgs.prototype, "where", void 0);
DeleteManyLandSizeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyLandSizeArgs);
exports.DeleteManyLandSizeArgs = DeleteManyLandSizeArgs;
