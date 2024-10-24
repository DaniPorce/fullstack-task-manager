# frontend/Dockerfile
FROM node:14

# Imposta la directory di lavoro
WORKDIR /usr/src/app

# Copia il package.json e installa le dipendenze
COPY package.json ./
RUN npm install

# Copia il resto del codice
COPY . .

# Costruisci il progetto
RUN npm run build

# Esponi la porta
EXPOSE 3000

# Comando per avviare il server di sviluppo React
CMD ["npm", "start"]
