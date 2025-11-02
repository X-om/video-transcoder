import { greet } from "@repo/utils";
import { env } from "./config/env.js";

const main = async (): Promise<void> => {
  console.info(greet("Omnidev Turbo"));
  console.info(`🚀 Server starting on ${env.HOST}:${env.PORT}`);
  console.info(`📦 Environment: ${env.NODE_ENV}`);

};

main().catch(error => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
