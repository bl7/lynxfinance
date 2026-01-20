"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ToastType = "success" | "error" | "info";

export type ToastOptions = {
  type: ToastType;
  title: string;
  message?: string;
  durationMs?: number; // default 4000
};

type ToastItem = Required<ToastOptions> & { id: string };

type ToastContextType = {
  showToast: (opts: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<Record<string, number>>({});

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timers.current[id];
    if (timer) {
      window.clearTimeout(timer);
      delete timers.current[id];
    }
  }, []);

  const showToast = useCallback(
    (opts: ToastOptions) => {
      const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const durationMs = opts.durationMs ?? 4000;
      const item: ToastItem = {
        id,
        type: opts.type,
        title: opts.title,
        message: opts.message ?? "",
        durationMs,
      };

      setToasts((prev) => [...prev, item].slice(-3)); // keep last 3

      timers.current[id] = window.setTimeout(() => removeToast(id), durationMs);
    },
    [removeToast]
  );

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-4 left-1/2 z-60 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 space-y-2">
        {toasts.map((t) => {
          const tone =
            t.type === "success"
              ? "border-green-200 bg-green-50 text-green-900"
              : t.type === "error"
              ? "border-red-200 bg-red-50 text-red-900"
              : "border-slate-200 bg-white text-slate-900";
          const titleTone =
            t.type === "success"
              ? "text-green-900"
              : t.type === "error"
              ? "text-red-900"
              : "text-slate-900";

          return (
            <div
              key={t.id}
              className={`rounded-xl border p-3 shadow-lg backdrop-blur ${tone}`}
              role="status"
              aria-live="polite"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={`text-sm font-semibold ${titleTone}`}>
                    {t.title}
                  </p>
                  {t.message ? (
                    <p className="mt-1 text-xs leading-relaxed opacity-90">
                      {t.message}
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => removeToast(t.id)}
                  className="text-xs font-semibold opacity-70 transition hover:opacity-100"
                  aria-label="Dismiss"
                >
                  ✕
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
