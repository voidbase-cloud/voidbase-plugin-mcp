// mcp, as its tests load it: the behaviour main.js exports and its manifest.json together, the way an
// instance puts an installed pb_ files plugin together (voidbase src/platform/node/plugins.ts).
import behaviour from "../main.js";
import { mcpWith as behaviourWith } from "../main.js";
import declared from "../manifest.json" with { type: "json" };
import type { Plugin, PluginManifest } from "@voidbase-cloud/voidbase/testing";

export * from "../main.js";
export const mcp = Object.assign(behaviour, { manifest: declared as PluginManifest }) as typeof behaviour & Plugin;
export const mcpWith = (...args: Parameters<typeof behaviourWith>) => Object.assign(behaviourWith(...args), { manifest: declared as PluginManifest }) as ReturnType<typeof behaviourWith> & Plugin;
