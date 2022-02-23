"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateimagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PropertyCreateimagesInput = class PropertyCreateimagesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyCreateimagesInput.prototype, "set", void 0);
PropertyCreateimagesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateimagesInput", {
        isAbstract: true
    })
], PropertyCreateimagesInput);
exports.PropertyCreateimagesInput = PropertyCreateimagesInput;
