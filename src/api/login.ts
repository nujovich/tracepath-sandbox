export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  body: { ok: boolean; message: string };
}

const USERS: Record<string, string> = {
  alice: "wonderland",
};

export function handleLogin(req: LoginRequest): LoginResponse {
  if (!req.username || !req.password) {
    return { status: 400, body: { ok: false, message: "Missing credentials" } };
  }
  if (USERS[req.username] !== req.password) {
    return { status: 401, body: { ok: false, message: "Invalid credentials" } };
  }
  return { status: 200, body: { ok: true, message: "Logged in" } };
}
