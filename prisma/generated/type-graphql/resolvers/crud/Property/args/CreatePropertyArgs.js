"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateInput_1 = require("../../../inputs/PropertyCreateInput");
let CreatePropertyArgs = class CreatePropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateInput_1.PropertyCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateInput_1.PropertyCreateInput)
], CreatePropertyArgs.prototype, "data", void 0);
CreatePropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreatePropertyArgs);
exports.CreatePropertyArgs = CreatePropertyArgs;
