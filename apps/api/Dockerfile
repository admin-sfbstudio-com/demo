FROM node:23-alpine AS base

RUN apk update && apk upgrade && apk --no-cache add \
  curl \
  git

RUN npm install -g \
  pnpm@10.15.0 \
  bun

RUN echo 'alias ll="ls -lha"' >> /etc/profile.d/aliases.sh

WORKDIR /demo

#======================
# Prune the monorepo
#======================
FROM base AS prune

ENV TURBO_TELEMETRY_DISABLED=1

COPY . .

RUN npx turbo prune @demo/api --docker

#======================
# Install dependencies
#======================
FROM base AS install

COPY --from=prune /demo/out/json/ .

RUN pnpm install --frozen-lockfile --prod

#======================
# Start the app
#======================
FROM base AS run

# Hack to be able to find root of repo
RUN git init --quiet

COPY --from=prune --chown=node:node /demo/out/full/ .
COPY --from=install --chown=node:node /demo .

RUN chown node:node /demo

RUN mkdir -p /opt/demo/data
RUN chown -R node:node /opt/demo

WORKDIR /demo/apps/api

USER node

EXPOSE 3000

CMD ["bun", "run", "src/index.ts"]
