"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateManyPropertyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateManyPropertyInput_1 = require("../inputs/SaveCreateManyPropertyInput");
let SaveCreateManyPropertyInputEnvelope = class SaveCreateManyPropertyInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateManyPropertyInput_1.SaveCreateManyPropertyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveCreateManyPropertyInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SaveCreateManyPropertyInputEnvelope.prototype, "skipDuplicates", void 0);
SaveCreateManyPropertyInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateManyPropertyInputEnvelope", {
        isAbstract: true
    })
], SaveCreateManyPropertyInputEnvelope);
exports.SaveCreateManyPropertyInputEnvelope = SaveCreateManyPropertyInputEnvelope;
