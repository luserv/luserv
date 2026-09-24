import {
  siGo,
  siTypescript,
  siSvelte,
  siNextdotjs,
  siNestjs,
  siPostgresql,
  siReact,
  siSupabase,
  siCloudflare,
  siVercel
} from 'simple-icons';

// Lookup used by skillChips / deploymentStack entries (see $constants), which
// reference icons by these string keys so the data stays framework-agnostic.
export const brandIcons: Record<string, { path: string; title: string }> = {
  siGo,
  siTypescript,
  siSvelte,
  siNextdotjs,
  siNestjs,
  siPostgresql,
  siReact,
  siSupabase,
  siCloudflare,
  siVercel
};
