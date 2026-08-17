import type { Instrumentation } from "next";

export async function register() {}

export const onRequestError: Instrumentation.onRequestError = async (
  error,
  request,
  context,
) => {
  const message = error instanceof Error ? error.message : String(error);
  const digest =
    typeof error === "object" && error !== null && "digest" in error
      ? String(error.digest)
      : undefined;

  console.error(
    JSON.stringify({
      type: "request_error",
      message,
      digest,
      path: request.path,
      method: request.method,
      route: context.routePath,
      routerKind: context.routerKind,
      routeType: context.routeType,
      timestamp: new Date().toISOString(),
    }),
  );
};
