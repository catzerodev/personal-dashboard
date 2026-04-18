import { useTasks } from "../../tasks/hooks/use-tasks";
import PageBreadcrumb from "../../../common/components/page-breadcrumb";

export function DashboardPage() {
  const { stats, groupedTasks } = useTasks();

  const upcomingTasks = groupedTasks
    .flatMap((group) =>
      group.tasks
        .filter((task) => task.status !== "completed")
        .map((task) => ({
          ...task,
          groupTitle: group.title,
        })),
    )
    .slice(0, 4);

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <PageBreadcrumb current="dashboard" currentLabel="Dashboard" />

      <div className="mt-5 flex-1 overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/30 shadow-2xl">
        <div className="h-full p-8">
          <div className="grid h-full min-h-0 gap-8 xl:grid-cols-[1.55fr_0.85fr]">
            <div className="flex min-h-0 flex-col gap-8">
              <div className="shrink-0">
                <h2 className="text-4xl font-medium tracking-[-0.02em] leading-[1.1] text-white">
                  Dashboard
                </h2>
                <p className="mt-2 text-sm tracking-[-0.01em] text-white/60">
                  Your personal productivity space
                </p>
              </div>

              <div className="shrink-0 grid gap-4 sm:grid-cols-2">
                <MiniCard title="Total Tasks" value={stats.total} />
                <MiniCard title="Completed" value={stats.completed} />
                <MiniCard title="In Progress" value={stats.inProcess} />
                <MiniCard title="Priority Tasks" value={stats.priority} />
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto pr-2">
                <h3 className="mb-5 text-3xl font-medium tracking-[-0.02em] leading-[1.1] text-white">
                  Today’s Focus
                </h3>

                <div className="space-y-6">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-3">
                      <span className="mt-2 h-4 w-4 rounded-sm border border-white/60" />

                      <div>
                        <p className="text-lg text-white/90">{task.title}</p>
                        <p className="mt-1 text-sm text-white/45">
                          {task.groupTitle}
                        </p>
                      </div>
                    </div>
                  ))}

                  {upcomingTasks.length === 0 && (
                    <p className="text-sm text-white/60">No pending tasks.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex min-h-0 flex-col gap-6">
              <SideCard title="Overall Progress">
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-300"
                    style={{
                      width: `${
                        stats.total === 0
                          ? 0
                          : Math.round((stats.completed / stats.total) * 100)
                      }%`,
                    }}
                  />
                </div>

                <p className="mt-5 text-4xl font-semibold text-white">
                  {stats.completed} / {stats.total}
                </p>
                <p className="mt-1 text-sm text-white/55">tasks completed</p>
              </SideCard>

              <SideCard title="Quick Summary">
                <div className="space-y-4 text-sm text-white/80">
                  <SummaryRow label="Pending" value={stats.pending} />
                  <SummaryRow label="In Progress" value={stats.inProcess} />
                  <SummaryRow label="Completed" value={stats.completed} />
                  <SummaryRow label="Priority" value={stats.priority} />
                </div>
              </SideCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniCard({ title, value }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/8 p-5">
      <p className="text-sm tracking-[-0.01em] text-white/60">{title}</p>
      <p className="mt-3 text-4xl font-medium tracking-[-0.02em] text-white">
        {value}
      </p>
    </div>
  );
}

function SideCard({ title, children }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/8 p-6">
      <h3 className="mb-5 text-2xl font-medium tracking-[-0.02em] leading-[1.1] text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
