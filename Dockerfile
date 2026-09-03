FROM node:20-alpine AS base
WORKDIR /app

# --- Dependencias ---
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# --- Imagen final ---
FROM base AS runner
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000

CMD ["node", "server.js"]
