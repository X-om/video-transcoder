FROM oven/bun:1.1.34-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json bun.lockb ./
COPY packages/utils/package.json ./packages/utils/
COPY apps/backend/package.json ./apps/backend/
RUN bun install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Production image
FROM base AS runner
ENV NODE_ENV=production
COPY --from=builder /app/apps/backend/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
COPY apps/backend/package.json ./

EXPOSE 3000
CMD ["bun", "run", "start"]
