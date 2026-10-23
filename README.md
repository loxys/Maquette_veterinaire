# CHAL’VET — Maquette du site vétérinaire

Maquette statique en HTML et CSS. Aucun serveur, aucune base de données et aucune installation de dépendances ne sont nécessaires pour la consulter.

## Installation

### Avec Git

Depuis un terminal :

```powershell
git clone https://github.com/loxys/Maquette_veterinaire.git
cd Maquette_veterinaire
```

Le dépôt étant privé, un compte GitHub disposant des droits d’accès est nécessaire.

### Sans Git

1. Ouvrir le dépôt sur GitHub avec un compte autorisé.
2. Cliquer sur **Code**, puis **Download ZIP**.
3. Extraire entièrement l’archive avant d’ouvrir la maquette.

## Ouvrir la page d’accueil

Dans le dossier du projet, ouvrir **`Wireframes\Page d'accueil\index.html`** dans un navigateur (Edge, Chrome, Firefox, etc.).

**C’est ce fichier qui sert de point d’entrée**, et non les fichiers `index.html` des autres dossiers, qui correspondent aux pages internes.

Sous Windows, il est également possible de lancer l’accueil depuis PowerShell, à la racine du projet :

```powershell
Start-Process ".\Wireframes\Page d'accueil\index.html"
```

Utiliser ensuite le menu et les liens de la maquette pour naviguer entre les pages.

Conserver les dossiers `Wireframes` et `Assets` à leur emplacement : les pages utilisent des chemins relatifs pour charger la feuille de style, les images et les autres pages.

## Organisation du projet

- `Wireframes` : les pages HTML, avec un dossier par page.
- `Assets` : la feuille de style commune et les images.
- `Documentation` : le document de cadrage UX/UI.

## Limites de la maquette

Les formulaires et services numériques présentés sont des prototypes non fonctionnels : aucun envoi de données, compte utilisateur ou suivi de dossier n’est actif.
