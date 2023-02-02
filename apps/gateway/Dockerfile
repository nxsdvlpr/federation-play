# Builder Stage
FROM node:16 as builder

WORKDIR /usr/src

# Copy everything in project
COPY . .

# Copy .env for production
COPY ./apps/gateway/.env.prod /usr/src/apps/gateway/.env

# Update npm | Install pnpm | Set PNPM_HOME
RUN --mount=type=cache,id=npm-store,target=/root/.npm-store npm i -g npm@8.19.2; \
  npm install -g turbo pnpm typescript ts-node; \
  pnpm setup; \
  mkdir -p /usr/local/share/pnpm &&\
  export PNPM_HOME="/usr/local/share/pnpm" &&\
  export PATH="$PNPM_HOME:$PATH"; \
  pnpm bin -g

# Install app dependencies
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store pnpm install --frozen-lockfile --unsafe-perm

# Generate prisma client && build the app
RUN turbo run build --filter=gateway

# Production Stage
FROM node:16 AS production

# Set node env to prod
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set Working Directory
WORKDIR /usr/src

# Copy all from builder stage
COPY --from=builder /usr/src/apps/gateway ./apps/gateway
COPY --from=builder /usr/src/node_modules ./node_modules
COPY --from=builder /usr/src/packages ./packages
COPY --from=builder /usr/src/package.json .

# Set Working Directory
WORKDIR /usr/src/apps/gateway

# Run app
CMD node dist/main.js