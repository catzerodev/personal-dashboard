import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/use-auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login({
        username: form.username,
        password: form.password,
      });

      navigate("/");
    } catch {
      setError("Username or password are incorrect.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[url('/background.jpg')] bg-cover bg-center px-4 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-[30px] border border-white/10 bg-slate-950/70 p-8 shadow-2xl backdrop-blur-2xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-semibold tracking-[-0.03em]">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-white/55">
            Sign in to continue to iDash.
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(event) =>
              setForm({ ...form, username: event.target.value })
            }
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-cyan-300/40"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-cyan-300/40"
          />

          {error && <p className="text-sm text-red-300">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Loading..." : "Enter"}
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
          <p>Test user:</p>
          <p className="mt-1">
            Username: <span className="text-white">mor_2314</span>
          </p>
          <p>
            Password: <span className="text-white">83r5^_</span>
          </p>
        </div>
      </form>
    </main>
  );
}