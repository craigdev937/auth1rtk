import { expect, test } from "@rstest/core";
import { Troq } from "../components/Henry";

test("should Troq correctly", () => {
    expect(Troq()).toBe("Henry Quartermain!");
});


