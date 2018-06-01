"use strict";

const jestToolkit = require("../index");

describe("resolved", () => {
  it("should handle an exception being thrown", async () => {
    expect(
      await jestToolkit.sync(Promise.reject(new Error("deliberately thrown")))
    ).toThrow(/deliberately thrown/);
  });

  it("should handle no exception being thrown", async () => {
    expect(await jestToolkit.sync(Promise.resolve(42))).not.toThrow();
  });
});
