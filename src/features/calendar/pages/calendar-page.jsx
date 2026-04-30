import { Minus, Plus, Timer, Target, RotateCcw } from "lucide-react";
import PageBreadcrumb from "../../../common/components/page-breadcrumb";
import { useFocusCounter } from "../store/focus-counter-store";

export function CalendarPage() {
  const { counter, increment, decrement } = useFocusCounter();

  const dailyGoal = 6;
  const progress = Math.min((counter / dailyGoal) * 100, 100);

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between px-1">
        <PageBreadcrumb current="todo" currentLabel="Focus Tracker" />
      </div>

      <div className="mt-5 flex-1 overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/20 p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex h-full flex-col justify-center">
          <div className="mx-auto w-full max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                  Daily Focus
                </p>

                <h2 className="mt-3 text-5xl font-semibold tracking-[-0.04em] text-white">
                  Focus Tracker
                </h2>

                <p className="mt-3 max-w-lg text-white/55">
                  Count your completed study or work sessions for today.
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.35)]">
                <Timer size={30} />
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.2fr]">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/30 p-6 text-center">
                <p className="text-sm text-white/55">Sessions completed</p>

                <p className="mt-4 text-8xl font-semibold leading-none tracking-[-0.06em] text-white">
                  {counter}
                </p>

                <p className="mt-4 text-sm text-white/50">
                  Goal: {dailyGoal} sessions
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div>
                  <div className="mb-3 flex items-center justify-between text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <Target size={16} />
                      Progress
                    </span>
                    <span>{Math.round(progress)}%</span>
                  </div>

                  <div className="h-4 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-cyan-300 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <p className="mt-5 text-sm text-white/50">
                    Add one point every time you complete a focus session.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <button
                    onClick={decrement}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white/80 transition hover:bg-white/15 hover:text-white active:scale-95"
                  >
                    <Minus size={18} />
                    Undo
                  </button>

                  <button
                    onClick={increment}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 font-semibold text-slate-950 transition hover:scale-[1.02] active:scale-95"
                  >
                    <Plus size={18} />
                    Add session
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/55">
              <RotateCcw size={16} />
              <span>
                This counter is handled with Zustand as a global store.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}