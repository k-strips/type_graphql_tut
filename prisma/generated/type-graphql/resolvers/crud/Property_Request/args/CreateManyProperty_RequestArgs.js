"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProperty_RequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateManyInput_1 = require("../../../inputs/Property_RequestCreateManyInput");
let CreateManyProperty_RequestArgs = class CreateManyProperty_RequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestCreateManyInput_1.Property_RequestCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyProperty_RequestArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyProperty_RequestArgs.prototype, "skipDuplicates", void 0);
CreateManyProperty_RequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyProperty_RequestArgs);
exports.CreateManyProperty_RequestArgs = CreateManyProperty_RequestArgs;
