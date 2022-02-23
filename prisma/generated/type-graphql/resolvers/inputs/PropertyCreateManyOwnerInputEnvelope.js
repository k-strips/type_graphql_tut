"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateManyOwnerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateManyOwnerInput_1 = require("../inputs/PropertyCreateManyOwnerInput");
let PropertyCreateManyOwnerInputEnvelope = class PropertyCreateManyOwnerInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateManyOwnerInput_1.PropertyCreateManyOwnerInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyCreateManyOwnerInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyCreateManyOwnerInputEnvelope.prototype, "skipDuplicates", void 0);
PropertyCreateManyOwnerInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateManyOwnerInputEnvelope", {
        isAbstract: true
    })
], PropertyCreateManyOwnerInputEnvelope);
exports.PropertyCreateManyOwnerInputEnvelope = PropertyCreateManyOwnerInputEnvelope;
