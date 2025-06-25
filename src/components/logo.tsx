import { Leaf } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Leaf className="h-6 w-6 text-primary" />
      <h1 className="text-2xl font-bold font-headline text-primary">
        Serenity Spa
      </h1>
    </div>
  );
}
