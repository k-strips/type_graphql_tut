"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateManyOrganizationInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateManyOrganizationInput_1 = require("../inputs/PropertyCreateManyOrganizationInput");
let PropertyCreateManyOrganizationInputEnvelope = class PropertyCreateManyOrganizationInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateManyOrganizationInput_1.PropertyCreateManyOrganizationInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyCreateManyOrganizationInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyCreateManyOrganizationInputEnvelope.prototype, "skipDuplicates", void 0);
PropertyCreateManyOrganizationInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateManyOrganizationInputEnvelope", {
        isAbstract: true
    })
], PropertyCreateManyOrganizationInputEnvelope);
exports.PropertyCreateManyOrganizationInputEnvelope = PropertyCreateManyOrganizationInputEnvelope;
