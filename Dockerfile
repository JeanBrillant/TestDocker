# Utiliser une image Node.js officielle comme image de base
FROM node:20

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tout le reste du projet dans le conteneur
COPY . .

# Exposer le port sur lequel json-server s'exécute (par défaut, c'est le port 3000)
EXPOSE 3000

# Commande pour démarrer le serveur
CMD ["npm", "run", "start:json-server"]
