import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-zinc-100/50 dark:bg-zinc-800/75 p-4 min-h-[400px]"></div>
        <div className="rounded-xl bg-zinc-100/50 dark:bg-zinc-800/75 p-4"></div>
        <div className="rounded-xl bg-zinc-100/50 dark:bg-zinc-800/75 p-4"></div>
      </div>
      <div className="flex-1 grid md:grid-cols-2 gap-4 rounded-xl">
        <div className="rounded-xl bg-zinc-100/50 dark:bg-zinc-800/75 p-4 min-h-[400px]"></div>
        <div className="rounded-xl bg-zinc-100/50 dark:bg-zinc-800/75 p-4"></div>
      </div>
    </div>
  );
}
