"use client";

import { useActionState, useEffect, useTransition } from "react";

export type StatusType = "ok" | "error" | null;

interface UsePostActionProps<T, P> {
  action: (prevState: T, formData: P) => Promise<any>;
  defaultState?: Omit<T, "status">;
  onSuccess?: () => void;
  onError?: () => void;
}

export default function usePostAction<T, P>({
  action,
  defaultState,
  onSuccess,
  onError,
}: UsePostActionProps<T, P>) {
  const [isTransitionPending, startTransition] = useTransition();
  const [data, actionFn, isPending] = useActionState(
    action,
    defaultState as Awaited<T>
  );

  const actionCallback = (formData: P) =>
    startTransition(() => actionFn(formData));

  useEffect(() => {
    if (data?.status === "ok" && onSuccess) {
      startTransition(onSuccess);
    }
    if (data?.status === "error" && onError) {
      startTransition(onError);
    }
  }, [data]);

  return {
    data,
    action: actionFn,
    actionCallback,
    isPending: isPending || isTransitionPending,
  };
}
