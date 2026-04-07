import { describe, expect, it } from "@jest/globals";
import { validateCNP } from "./validateCNP";

describe("validateCNP", () => {

    it("should return true for a valid CNP", () => {
        expect(validateCNP("2990219469000")).toBe(true);
    });

    it("should return false for invalid control digit", () => {
        expect(validateCNP("2990219469001")).toBe(false);
    });

    it("should return false for CNP with less than 13 digits", () => {
        expect(validateCNP("299021946900")).toBe(false);
    });

    it("should return false for CNP with more than 13 digits", () => {
        expect(validateCNP("29902194690001")).toBe(false);
    });

    it("should return false for letters in CNP", () => {
        expect(validateCNP("29902194A9000")).toBe(false);
    });

    it("should return false for empty CNP", () => {
        expect(validateCNP("")).toBe(false);
    });

    it("should return false for all zeros", () => {
        expect(validateCNP("0000000000000")).toBe(false);
    });

    it("should return false for null-like value", () => {
        expect(validateCNP("1111111111111")).toBe(false);
    });

});