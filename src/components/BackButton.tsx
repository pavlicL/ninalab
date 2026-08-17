import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 lg:pt-8">
      <button
        type="button"
        onClick={() => router.history.back()}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
      >
        <ArrowLeft size={16} /> Natrag
      </button>
    </div>
  );
}
