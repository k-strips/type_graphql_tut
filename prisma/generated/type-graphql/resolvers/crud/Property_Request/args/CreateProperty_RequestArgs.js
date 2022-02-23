"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProperty_RequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateInput_1 = require("../../../inputs/Property_RequestCreateInput");
let CreateProperty_RequestArgs = class CreateProperty_RequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateInput_1.Property_RequestCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateInput_1.Property_RequestCreateInput)
], CreateProperty_RequestArgs.prototype, "data", void 0);
CreateProperty_RequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateProperty_RequestArgs);
exports.CreateProperty_RequestArgs = CreateProperty_RequestArgs;
