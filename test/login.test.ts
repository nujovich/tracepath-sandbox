import { test } from "node:test";
import assert from "node:assert/strict";
import { handleLogin } from "../src/api/login.ts";

test("returns 200 for valid credentials", () => {
  const res = handleLogin({ username: "alice", password: "wonderland" });
  assert.equal(res.status, 200);
  assert.equal(res.body.ok, true);
});

test("returns 401 for invalid credentials", () => {
  const res = handleLogin({ username: "alice", password: "nope" });
  assert.equal(res.status, 401);
});

test("returns 400 when credentials are missing", () => {
  const res = handleLogin({ username: "", password: "" });
  assert.equal(res.status, 400);
});
