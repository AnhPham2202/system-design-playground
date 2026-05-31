import { PlaygroundCanvas } from '../features/playground/components/PlaygroundCanvas';
import { Sidebar } from '../features/playground/components/Sidebar';

export default function App() {
  return (
    <main className="flex h-screen min-h-[640px] bg-[var(--bg-page)] text-[var(--text-primary)]">
      <Sidebar />
      <section className="min-w-0 flex-1">
        <PlaygroundCanvas />
      </section>
    </main>
  );
}
