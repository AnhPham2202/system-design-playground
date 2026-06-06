## Project Stack
- React 18 + TypeScript on Vite.
- Tailwind CSS for styling.
- React Flow for the system-design canvas.
- Keep changes small and follow the existing feature-folder structure.

## Main Paths

- App entry: `src/main.tsx`
- App shell: `src/app/App.tsx`
- Global styles and CSS variables: `src/styles/globals.css`
- Abstract and generic components/types/utilities: `src/abstract`
- Tailwind config: `tailwind.config.ts`
- Playground canvas: `src/features/playground/components/PlaygroundCanvas.tsx`
- Flow state hook: `src/features/playground/hooks/usePlaygroundFlow.ts`
- Initial nodes: `src/features/playground/data/initialNodes.ts`
- Initial edges: `src/features/playground/data/initialEdges.ts`
- Node data/types: `src/features/playground/types/playground.types.ts`
- 

## React Flow Notes

- `nodeTypes.ts` is the registry passed into `<ReactFlow nodeTypes={nodeTypes} />`.
- Current node types are `user`, `gateway`, `server`, `database`, `cache`, and `queue`.
- Most node UI should reuse `BaseSystemNode.tsx` instead of duplicating card/handle styling.
- When adding a new node type, update these files together:
  - `src/features/playground/types/playground.types.ts`
  - `src/features/playground/nodes/nodeData.ts`
  - `src/features/playground/nodes/nodeTypes.ts`
  - add the node component in `src/features/playground/nodes/`
  - add sample data in `src/features/playground/data/initialNodes.ts` when needed

## Styling Rules

- Use Tailwind utility classes first.
- Use CSS variables from `src/styles/globals.css` for theme colors, borders, and backgrounds.
- Prefer existing tokens such as `primary-*`, `secondary-*`, `--text-primary`, `--text-secondary`, `--bg-card`, `--bg-section`, `--border-light`, and `--border-soft`.
- Keep UI dense and practical: this is a system-design playground, not a marketing landing page.
- Cards should stay compact with `rounded-lg` or smaller unless an existing pattern requires otherwise.
- Do not introduce a new design system or component library unless explicitly requested.

## Theme Tokens

The global theme should stay based on these CSS variables:

## Working Preferences
- Use TypeScript types instead of loose objects.
- Keep React components small and readable.

