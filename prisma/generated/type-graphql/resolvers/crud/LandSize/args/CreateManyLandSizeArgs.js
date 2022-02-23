"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLandSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateManyInput_1 = require("../../../inputs/LandSizeCreateManyInput");
let CreateManyLandSizeArgs = class CreateManyLandSizeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeCreateManyInput_1.LandSizeCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyLandSizeArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyLandSizeArgs.prototype, "skipDuplicates", void 0);
CreateManyLandSizeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyLandSizeArgs);
exports.CreateManyLandSizeArgs = CreateManyLandSizeArgs;
