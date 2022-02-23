"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLandSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateInput_1 = require("../../../inputs/LandSizeCreateInput");
let CreateLandSizeArgs = class CreateLandSizeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateInput_1.LandSizeCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateInput_1.LandSizeCreateInput)
], CreateLandSizeArgs.prototype, "data", void 0);
CreateLandSizeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateLandSizeArgs);
exports.CreateLandSizeArgs = CreateLandSizeArgs;
