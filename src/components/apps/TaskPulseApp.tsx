"use client";

import React, { useState } from "react";
import {
  Kanban,
  CheckCircle2,
  Clock,
  Plus,
  Filter,
  Users,
  BarChart3,
  Calendar,
  AlertCircle,
  MoreVertical,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Tag,
  Search,
} from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "backlog" | "in_progress" | "in_review" | "done";
  priority: "High" | "Medium" | "Low";
  assignee: { name: string; avatar: string };
  points: number;
  tag: string;
}

const initialTasks: Task[] = [
  {
    id: "TASK-101",
    title: "Implement OAuth2 PKCE token exchange",
    description: "Secure authorization flow for mobile and single-page apps with proof key.",
    status: "in_progress",
    priority: "High",
    assignee: { name: "Alex Chen", avatar: "AC" },
    points: 8,
    tag: "Security",
  },
  {
    id: "TASK-102",
    title: "Real-time Redis WebSocket subscription",
    description: "Connect live event stream to update task boards with <50ms latency.",
    status: "in_progress",
    priority: "High",
    assignee: { name: "Sarah Connor", avatar: "SC" },
    points: 5,
    tag: "Backend",
  },
  {
    id: "TASK-103",
    title: "Design system dark glassmorphism tokens",
    description: "Standardize Tailwind CSS variables for border glow and backdrop filters.",
    status: "done",
    priority: "Medium",
    assignee: { name: "Elena Rostova", avatar: "ER" },
    points: 3,
    tag: "UI/UX",
  },
  {
    id: "TASK-104",
    title: "Automate Docker container vulnerability scan",
    description: "Integrate Trivy in GitHub Actions CI pipeline to block high CVEs.",
    status: "in_review",
    priority: "Medium",
    assignee: { name: "Marcus Vance", avatar: "MV" },
    points: 5,
    tag: "DevOps",
  },
  {
    id: "TASK-105",
    title: "Database index tuning on user_workspaces",
    description: "Add composite index on (tenant_id, created_at) to accelerate dashboard queries.",
    status: "done",
    priority: "High",
    assignee: { name: "Alex Chen", avatar: "AC" },
    points: 3,
    tag: "Database",
  },
  {
    id: "TASK-106",
    title: "Stripe subscription webhooks retry logic",
    description: "Handle failed invoice events with exponential backoff and customer email alerts.",
    status: "backlog",
    priority: "Low",
    assignee: { name: "Sarah Connor", avatar: "SC" },
    points: 5,
    tag: "Billing",
  },
  {
    id: "TASK-107",
    title: "AI sprint velocity & burndown predictor",
    description: "Train regression model to estimate sprint completion probability based on historical cycle times.",
    status: "backlog",
    priority: "Medium",
    assignee: { name: "Elena Rostova", avatar: "ER" },
    points: 13,
    tag: "AI Core",
  },
];

export default function TaskPulseApp() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTab, setActiveTab] = useState<"board" | "analytics" | "team">("board");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskTag, setNewTaskTag] = useState("Frontend");
  const [newTaskPriority, setNewTaskPriority] = useState<"High" | "Medium" | "Low">("Medium");

  const moveTask = (taskId: string, direction: "forward" | "backward") => {
    const statusOrder: Task["status"][] = ["backlog", "in_progress", "in_review", "done"];
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== taskId) return t;
        const currentIndex = statusOrder.indexOf(t.status);
        const newIndex =
          direction === "forward"
            ? Math.min(statusOrder.length - 1, currentIndex + 1)
            : Math.max(0, currentIndex - 1);
        return { ...t, status: statusOrder[newIndex] };
      })
    );
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: `TASK-${100 + tasks.length + 1}`,
      title: newTaskTitle.trim(),
      description: "Custom user task initialized in active sprint backlog.",
      status: "backlog",
      priority: newTaskPriority,
      assignee: { name: "You (Developer)", avatar: "ME" },
      points: 5,
      tag: newTaskTag,
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle("");
    setIsAddModalOpen(false);
  };

  const columns: { key: Task["status"]; title: string; color: string }[] = [
    { key: "backlog", title: "Backlog", color: "border-slate-700/60 bg-slate-900/30" },
    { key: "in_progress", title: "In Progress", color: "border-blue-500/40 bg-blue-950/20" },
    { key: "in_review", title: "In Review", color: "border-amber-500/40 bg-amber-950/20" },
    { key: "done", title: "Completed", color: "border-emerald-500/40 bg-emerald-950/20" },
  ];

  const filteredTasks = tasks.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "All" || t.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  const allTags = ["All", ...Array.from(new Set(tasks.map((t) => t.tag)))];

  const totalPoints = tasks.reduce((sum, t) => sum + t.points, 0);
  const donePoints = tasks.filter((t) => t.status === "done").reduce((sum, t) => sum + t.points, 0);
  const completionRate = Math.round((donePoints / (totalPoints || 1)) * 100);

  return (
    <div className="w-full min-h-screen bg-[#06090F] text-slate-100 flex flex-col font-sans">
      {/* Top App Bar */}
      <header className="border-b border-slate-800 bg-[#080D16]/90 backdrop-blur sticky top-12 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0066FF] to-[#00F0FF] p-[1px] flex items-center justify-center">
            <div className="w-full h-full bg-[#080D16] rounded-xl flex items-center justify-center text-[#00F0FF]">
              <Kanban className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white">TaskPulse Workspace</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#0066FF]/20 text-[#00F0FF] border border-[#0066FF]/40">
                Sprint 34 Active
              </span>
            </div>
            <p className="text-xs text-slate-400">Collaborative Agile Project & Multi-Tenant Sprint Board</p>
          </div>
        </div>

        {/* View Switcher & Action */}
        <div className="flex items-center gap-3">
          <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1 text-xs">
            <button
              onClick={() => setActiveTab("board")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium ${
                activeTab === "board" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Kanban className="w-3.5 h-3.5" />
              <span>Board</span>
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium ${
                activeTab === "analytics" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Burndown</span>
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium ${
                activeTab === "team" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Team</span>
            </button>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#003D99] text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>New Task</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Area */}
      <main className="flex-1 p-6 max-w-[1600px] w-full mx-auto flex flex-col gap-6">
        {/* Metric Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#0B101B] border border-slate-800/80 flex flex-col gap-1">
            <span className="text-xs text-slate-400 font-medium">Sprint Completion</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-white">{completionRate}%</span>
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +14% vs Sprint 33
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0066FF] to-[#00F0FF] rounded-full transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0B101B] border border-slate-800/80 flex flex-col gap-1">
            <span className="text-xs text-slate-400 font-medium">Story Points Burnt</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-white">
                {donePoints} <span className="text-sm font-normal text-slate-500">/ {totalPoints} pts</span>
              </span>
              <span className="text-xs text-[#00F0FF] font-mono">18 remaining</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">Team velocity: 26 pts/wk</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0B101B] border border-slate-800/80 flex flex-col gap-1">
            <span className="text-xs text-slate-400 font-medium">Active Blockers</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-amber-400">0</span>
              <span className="text-xs text-emerald-400 font-medium">All Clear</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">CI/CD pipeline healthy</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0B101B] border border-slate-800/80 flex flex-col gap-1">
            <span className="text-xs text-slate-400 font-medium">Days Remaining</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-white">4 Days</span>
              <span className="text-xs text-slate-400">Ends Oct 4</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">Daily sync at 10:00 AM UTC</span>
          </div>
        </div>

        {/* Tab 1: Kanban Board */}
        {activeTab === "board" && (
          <div className="flex flex-col gap-4">
            {/* Filter and Search Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#0B101B] border border-slate-800">
              <div className="flex items-center gap-2 flex-1 max-w-sm">
                <Search className="w-4 h-4 text-slate-400 ml-2" />
                <input
                  type="text"
                  placeholder="Filter tasks by name or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none w-full"
                />
              </div>

              {/* Tags Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                      selectedTag === tag
                        ? "bg-[#0066FF] text-white"
                        : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
              {columns.map((col) => {
                const colTasks = filteredTasks.filter((t) => t.status === col.key);
                return (
                  <div
                    key={col.key}
                    className={`flex flex-col rounded-2xl border p-4 min-h-[500px] ${col.color}`}
                  >
                    {/* Column Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white">{col.title}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-800/80 text-slate-300">
                          {colTasks.length}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setIsAddModalOpen(true);
                        }}
                        className="text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Task Cards in this column */}
                    <div className="flex flex-col gap-3">
                      {colTasks.length === 0 && (
                        <div className="p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl">
                          No tasks in this lane
                        </div>
                      )}

                      {colTasks.map((task) => (
                        <div
                          key={task.id}
                          className="group p-4 rounded-xl bg-[#0E1524] border border-slate-800/90 hover:border-[#0066FF]/60 hover:shadow-[0_4px_20px_rgba(0,102,255,0.15)] transition-all flex flex-col gap-2.5 relative"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-mono font-bold text-[#00F0FF]">
                              {task.id}
                            </span>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                task.priority === "High"
                                  ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                                  : task.priority === "Medium"
                                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                                  : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              }`}
                            >
                              {task.priority}
                            </span>
                          </div>

                          <h4 className="text-xs font-semibold text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                            {task.title}
                          </h4>

                          <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                            {task.description}
                          </p>

                          <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-1">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 text-[9px] font-bold flex items-center justify-center text-white">
                                {task.assignee.avatar}
                              </div>
                              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                                {task.tag}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 font-bold">
                              {task.points} pts
                            </span>
                          </div>

                          {/* Quick Interactive Move Buttons */}
                          <div className="flex items-center justify-between pt-2 mt-1 border-t border-white/5">
                            <button
                              disabled={task.status === "backlog"}
                              onClick={() => moveTask(task.id, "backward")}
                              className="p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 disabled:opacity-20 disabled:hover:bg-slate-800/80 transition-colors flex items-center gap-1 text-[10px]"
                              title="Move back"
                            >
                              <ChevronLeft className="w-3 h-3" />
                              <span>Back</span>
                            </button>
                            <button
                              disabled={task.status === "done"}
                              onClick={() => moveTask(task.id, "forward")}
                              className="p-1 px-2 rounded bg-[#0066FF]/20 hover:bg-[#0066FF] text-[#00F0FF] hover:text-white disabled:opacity-20 transition-all flex items-center gap-1 text-[10px] font-medium"
                              title="Move next"
                            >
                              <span>Advance</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Analytics & Burndown */}
        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-2xl bg-[#0B101B] border border-slate-800 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Sprint 34 Burndown Chart</h3>
                  <p className="text-xs text-slate-400">Ideal burndown vs. actual team progress</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-3 h-0.5 bg-slate-500" /> Ideal
                  </span>
                  <span className="flex items-center gap-1.5 text-[#00F0FF]">
                    <span className="w-3 h-0.5 bg-[#00F0FF]" /> Actual
                  </span>
                </div>
              </div>

              {/* Graphical representation */}
              <div className="h-64 flex items-end justify-between gap-3 pt-8 pb-4 border-b border-slate-800 font-mono text-[10px] text-slate-500">
                {[
                  { day: "Day 1", ideal: 42, actual: 42 },
                  { day: "Day 2", ideal: 36, actual: 39 },
                  { day: "Day 3", ideal: 30, actual: 31 },
                  { day: "Day 4", ideal: 24, actual: 27 },
                  { day: "Day 5", ideal: 18, actual: 20 },
                  { day: "Day 6", ideal: 12, actual: 16 },
                  { day: "Day 7 (Today)", ideal: 6, actual: 9 },
                  { day: "Day 8", ideal: 0, actual: null },
                ].map((d) => (
                  <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <div className="w-full flex items-end justify-center gap-1 h-48">
                      {/* Ideal line indicator */}
                      <div
                        className="w-1.5 bg-slate-700/60 rounded-t"
                        style={{ height: `${(d.ideal / 42) * 100}%` }}
                        title={`Ideal: ${d.ideal} pts`}
                      />
                      {/* Actual progress */}
                      {d.actual !== null && (
                        <div
                          className="w-3 bg-gradient-to-t from-[#0066FF] to-[#00F0FF] rounded-t shadow-lg shadow-blue-500/20"
                          style={{ height: `${(d.actual / 42) * 100}%` }}
                          title={`Actual: ${d.actual} pts`}
                        />
                      )}
                    </div>
                    <span>{d.day}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Pacing: <strong>On schedule</strong> (Variance: -3 pts)</span>
                <span className="text-emerald-400 font-mono">97.8% On-Time Delivery Forecast</span>
              </div>
            </div>

            {/* Velocity History */}
            <div className="p-6 rounded-2xl bg-[#0B101B] border border-slate-800 flex flex-col gap-4">
              <h3 className="text-base font-bold text-white">Historical Velocity</h3>
              <p className="text-xs text-slate-400">Points delivered across previous 5 sprints</p>

              <div className="flex flex-col gap-3 mt-2">
                {[
                  { sprint: "Sprint 33", pts: 28, max: 30, status: "Delivered" },
                  { sprint: "Sprint 32", pts: 26, max: 30, status: "Delivered" },
                  { sprint: "Sprint 31", pts: 31, max: 30, status: "Overperformed" },
                  { sprint: "Sprint 30", pts: 24, max: 30, status: "Delivered" },
                  { sprint: "Sprint 29", pts: 27, max: 30, status: "Delivered" },
                ].map((s) => (
                  <div key={s.sprint} className="flex flex-col gap-1 text-xs">
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">{s.sprint}</span>
                      <span className="font-mono text-[#00F0FF]">{s.pts} pts</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0066FF] rounded-full"
                        style={{ width: `${(s.pts / 35) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Team Members */}
        {activeTab === "team" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Alex Chen", role: "Principal Architect", tasks: 2, points: 11, avatar: "AC", status: "Active" },
              { name: "Sarah Connor", role: "Senior Backend Eng", tasks: 2, points: 10, avatar: "SC", status: "Active" },
              { name: "Elena Rostova", role: "UI/UX & Frontend", tasks: 2, points: 16, avatar: "ER", status: "In Sync" },
              { name: "Marcus Vance", role: "DevOps & Cloud", tasks: 1, points: 5, avatar: "MV", status: "Reviewing" },
            ].map((member) => (
              <div
                key={member.name}
                className="p-5 rounded-2xl bg-[#0B101B] border border-slate-800 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0066FF] to-[#00F0FF] text-sm font-bold flex items-center justify-center text-white">
                  {member.avatar}
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{member.name}</span>
                    <span className="text-[10px] text-emerald-400 font-mono">{member.status}</span>
                  </div>
                  <span className="text-xs text-slate-400">{member.role}</span>
                  <div className="flex items-center gap-3 mt-2 text-[11px] font-mono text-slate-400">
                    <span>{member.tasks} tasks active</span>
                    <span>•</span>
                    <span className="text-[#00F0FF]">{member.points} pts assigned</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add Task Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0D131F] border border-slate-700 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-white">Create New Sprint Task</h3>
            <form onSubmit={handleCreateTask} className="flex flex-col gap-3">
              <label className="text-xs text-slate-400 font-medium">Task Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Implement WebSocket heartbeat mechanism"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#0066FF]"
              />

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-slate-400 font-medium">Domain / Tag</label>
                  <select
                    value={newTaskTag}
                    onChange={(e) => setNewTaskTag(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none"
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Database">Database</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Security">Security</option>
                    <option value="AI Core">AI Core</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-slate-400 font-medium">Priority</label>
                  <select
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value as any)}
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none"
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-800 mt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-lg shadow-blue-500/20"
                >
                  Add to Backlog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
