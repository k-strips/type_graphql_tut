"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateManyUserInput_1 = require("../inputs/Property_RequestCreateManyUserInput");
let Property_RequestCreateManyUserInputEnvelope = class Property_RequestCreateManyUserInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestCreateManyUserInput_1.Property_RequestCreateManyUserInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestCreateManyUserInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Property_RequestCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
Property_RequestCreateManyUserInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], Property_RequestCreateManyUserInputEnvelope);
exports.Property_RequestCreateManyUserInputEnvelope = Property_RequestCreateManyUserInputEnvelope;
