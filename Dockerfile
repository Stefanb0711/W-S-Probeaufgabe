FROM node:20.15.0

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules package-lock.json

RUN npm install


COPY prisma ./prisma


# Prisma-Client generieren
RUN npx prisma generate


RUN npm install --production --unsafe-perm


COPY . .

ENV NEXT_DISABLE_ESLINT=1


RUN npx next build --no-lint


EXPOSE 3000

CMD ["npm", "run", "start"]

