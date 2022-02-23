"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateManyInput_1 = require("../../../inputs/PropertyCreateManyInput");
let CreateManyPropertyArgs = class CreateManyPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateManyInput_1.PropertyCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyPropertyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyPropertyArgs.prototype, "skipDuplicates", void 0);
CreateManyPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyPropertyArgs);
exports.CreateManyPropertyArgs = CreateManyPropertyArgs;
