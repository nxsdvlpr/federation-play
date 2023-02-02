# Builder Stage
FROM node:16 as builder

WORKDIR /usr/src

# Copy everything in project
COPY . .

# Copy .env for production
COPY ./apps/post/.env.prod /usr/src/apps/post/.env

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
RUN cd apps/post && pnpm dlx prisma generate
RUN turbo run build --filter=post

# Production Stage
FROM node:16 AS production

# Set node env to prod
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set Working Directory
WORKDIR /usr/src

# Copy all from builder stage
COPY --from=builder /usr/src/apps/post ./apps/post
COPY --from=builder /usr/src/node_modules ./node_modules
COPY --from=builder /usr/src/packages ./packages
COPY --from=builder /usr/src/package.json .

# Set Working Directory
WORKDIR /usr/src/apps/post

# Run app
CMD node dist/src/main.js