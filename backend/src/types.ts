export type NodeType =
  | "llm"
  | "llm-file"
  | "llm-generic"
  | "llm-claude"
  | "text"
  | "http"
  | "log"
  | "file"
  | "time"
  | "display"
  | "save-file"
  | "start"
  | "cron"
  | "webhook"
  | "text-input"
  | "image-input"
  | "text-output"
  | "image-output"
  | "end"
  | "condition"
  | "loop"
  | "image-placeholder"
  | "video-placeholder";

export type WorkflowNode = {
  id: string;
  type: NodeType;
  name: string;
  config: Record<string, unknown>;
};

export type WorkflowEdge = {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
  style?: { stroke?: string; [key: string]: unknown };
};

export type WorkflowDefinition = {
  id: string;
  name: string;
  version: number;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
};

export type RunStatus = "queued" | "running" | "completed" | "failed";

export type RunLog = { ts: string; level: "info" | "error"; message: string };

export type WorkflowRun = {
  id: string;
  workflowId: string;
  status: RunStatus;
  context: Record<string, unknown>;
  logs: RunLog[];
  createdAt: string;
  updatedAt: string;
};

export type ProviderConfig = {
  id: string;
  name: string;
  baseURL: string;
  model: string;
  apiKeyAlias: string;
  description?: string;
  createdAt: string;
};
