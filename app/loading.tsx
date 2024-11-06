import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <section>
      <div>
        <Skeleton className="h-screen w-full" />
      </div>
    </section>
  );
}
