import { describe, expect, it} from "@jest/globals";
import { add } from "./functii";

describe("add", () => {
    it("should return the sum", () => {
        expect(add(1,2)).toBe(3);
    });
});