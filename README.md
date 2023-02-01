#GTbycegdim
GTbycegdim est un projet développé par les collaborateurs Wassim Lahlali, Badreddine Abourial, et Safia Maani. Il s'agit d'une application web Fullstack construite avec les technologies ExpressJs, VueJs et PostgreSql.

Il existe deux environnements de travail, le premier est pour le développement et peut être démarré avec la commande npm run start:dev. Le second est pour la production et peut être démarré avec npm run start:prod.

Pour exécuter le projet, vous devez d'abord cloner le projet à partir de GitHub. Ensuite, allez dans les dossiers client et server pour installer toutes les dépendances nécessaires.


##Environnements de travail
Il existe deux environnements de travail :
Développement :
     démarré avec la commande npm run start:dev
Production : 
     démarré avec la commande npm run start:prod

##Exécution du projet
1-Clonez le projet à partir de GitHub : 

    git clone https://github.com/<nom_du_repo>

2-Allez dans les dossiers client et server pour installer les dépendances nécessaires

  cd client
  npm install
  cd server
  npm install

3-Exécutez les conteneurs à partir du dossier racine en utilisant docker-compose

  docker-compose up

###L'application sera en cours d'exécution sur http://localhost:3000
.
##Notes
Veuillez noter que vous devez avoir docker installé pour exécuter le projet avec docker-compose.
Le fichier Dockerfile contient différents modes d'exécution (développement, production, test), vous pouvez décommenter celui que vous souhaitez utiliser.
Le fichier docker-compose construit les images des dossiers client et server ainsi que celle de la base de données.
