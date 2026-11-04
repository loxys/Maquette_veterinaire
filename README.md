# Chal'Vet — Maquette du site vétérinaire

Maquette statique en HTML et CSS, avec un JavaScript local limité à la démonstration. Aucun serveur, aucune base de données et aucune installation de dépendances ne sont nécessaires pour la consulter.

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

Le bouton **Pour les vétérinaires** ouvre `Wireframes\pour-les-veterinaires\index.html`, qui présente le parcours de référé.

Conserver les dossiers `Wireframes` et `Assets` à leur emplacement : les pages utilisent des chemins relatifs pour charger la feuille de style, les images et les autres pages.

## Organisation du projet

- `Wireframes` : les pages HTML, avec un dossier par page.
- `Assets` : la feuille de style commune et les images.
- `Documentation` : le document de cadrage UX/UI.

## Limites de la maquette

Les formulaires et services numériques présentés sont des prototypes non fonctionnels : aucun envoi de données, compte utilisateur ou suivi de dossier n’est actif.

## Compte rendu pour le développeur

- Le nom public est uniformisé en **Chal'Vet** et les annotations de conception sont retirées des treize pages. Les URL et chemins existants sont conservés.
- Les bandeaux d’entrée des treize pages utilisent un seul H1 court, sans surtitre, avec une introduction concise si nécessaire. **Ressources** et **Contact** affichent uniquement le titre après le fil d’Ariane. Les espacements sont réduits ; les surtitres des sections internes, les images et les interactions sont conservés.
- Les bandeaux de rappel centrés en fin de page sont supprimés sur l’ensemble du site. Les contenus principaux et les pieds de page sont conservés, sans vague intercalaire au bas des sections à fond doux.
- La page **Pour les propriétaires** présente le rendez-vous en deux étapes : orientation par le vétérinaire, puis contact avec la clinique. Le bouton **Contacter la clinique** mène directement au bloc de coordonnées, repris de la page **Contact** avec le même style et les mêmes informations d’accès. Ces deux blocs devront être mis à jour ensemble lorsque les coordonnées définitives seront fournies ; aucune réservation en ligne n’est ajoutée.
- Sur la page **Pour les vétérinaires**, les champs restent désactivés. **Envoyer la demande** ouvre uniquement une boîte de dialogue locale affichant « Chal'Vet a bien reçu votre demande. ». Elle se ferme avec **Fermer** ou **Échap**, puis le focus revient au bouton déclencheur.
- **L’envoi et la confirmation de réception sont simulés.** Aucun e-mail n’est envoyé, aucune réception n’est vérifiée et aucune donnée n’est transmise ni enregistrée. L’envoi réel, la vérification de réception, la validation des champs et le traitement sécurisé des pièces jointes devront être implémentés ultérieurement, hors du périmètre de cette maquette.
- **Imprimer le formulaire** appelle uniquement l’impression native du navigateur. Le style d’impression conserve le formulaire et masque navigation, autres sections, boutons et pop-up ; aucune bibliothèque ni génération de PDF n’est ajoutée.
- Aucun backend, base de données ou service externe n’est ajouté. Les coordonnées manquantes ne sont pas inventées ; elles restent à fournir par la clinique, de même que les modalités opérationnelles et les textes juridiques définitifs.
- Les vagues de fond sont statiques, avec un masque SVG embarqué commun aux pages. Leur couleur rejoint le fond de la section suivante pour éviter les bandes de raccord ; les vagues supprimées en bas de Contact, Ressources et Services restent absentes. Aucune dépendance ni ressource externe n’est nécessaire.
- La page **Ressources** propose une carte par lien, répartie entre informations essentielles (propriétaires, vétérinaires et préparation de consultation) et lectures facultatives (« Découvrir le parcours de référé » et « Découvrir l’espace professionnel »), sans dupliquer les services ni afficher le bandeau « À retenir ». La dernière section de **Contact** utilise une transition droite vers le pied de page, sans vague ; les autres vagues sont conservées.
- Le visuel principal de l’accueil est encadré par un galet asymétrique, sans contour superposé sur la photo. Le portrait du fondateur conserve un médaillon ovale sur l’accueil ; sur la page **À propos**, il utilise un cadre rectangulaire adouci avec un coin inférieur plus arrondi. Les images existantes sont conservées et les formes sont réalisées uniquement en CSS.
