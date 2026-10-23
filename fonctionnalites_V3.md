# CHAL’VET — Fonctionnalités V3 : services numériques

## Résumé

La V3 explore des services numériques qui pourraient prolonger le parcours de référé : transmission de demandes et de documents, suivi des échanges, informations pratiques pour les propriétaires et accès aux ressources professionnelles. Ce sont des pistes, pas des engagements de fonctionnement. Toute fonctionnalité qui traite des informations de santé animale ou des coordonnées doit être conçue avec la clinique, avec sécurité, confidentialité, responsabilités et processus réels définis avant le développement.

## Maquettes de pages créées

- **Préparer une consultation** : repères généraux pour les propriétaires après orientation ; adresse et consignes pratiques à confirmer.
- **Espace professionnel** : présentation d’une piste de portail, sans authentification, suivi de cas ni envoi actif.
- **Données et confidentialité** : liste de décisions préalables ; ce document de travail n’est pas une politique de confidentialité.

Ces pages sont des prototypes informatifs uniquement. Aucun service numérique ni traitement de données n’est activé.

## Liste des fonctionnalités à étudier

### Axe 1 — Adressage professionnel sécurisé

- [ ] **Étudier un formulaire d’adressage réellement fonctionnel**, à partir du prototype Figma, avec les champs validés par l’équipe.
- [ ] **Définir qui peut soumettre une demande et à qui elle est destinée** ; différencier clairement le parcours professionnel de l’information destinée aux propriétaires.
- [ ] **Choisir un canal sécurisé pour les pièces jointes** et définir formats, taille maximale, contrôle de fichiers, chiffrement, durée de conservation et suppression.
- [ ] **Fournir un accusé de réception factuel** si le système confirme réellement la transmission ; ne jamais laisser croire à une acceptation du cas ou à un délai garanti.
- [ ] **Concevoir les états d’erreur et de reprise** : champ invalide, envoi interrompu, fichier refusé, transmission non confirmée et assistance.
- [ ] **Documenter l’information de confidentialité** et valider les responsabilités de traitement et les durées avec les personnes compétentes avant la mise en service.

### Axe 2 — Espace professionnel (piste à évaluer)

- [ ] **Évaluer le besoin réel d’un espace vétérinaire** avant d’en dessiner l’accès : utilisateurs, tâches fréquentes et bénéfice par rapport au téléphone ou au courriel.
- [ ] **Si le besoin est confirmé, prototyper un accès authentifié** avec gestion des rôles, récupération de compte, journalisation et fermeture de session.
- [ ] **Étudier un suivi des demandes** limité aux statuts réellement gérés par la clinique et compréhensibles (par exemple : reçu, à compléter, traité).
- [ ] **Étudier le partage de comptes rendus ou de documents** uniquement si les circuits de validation et de transmission sont définis.
- [ ] **Tester le parcours avec quelques vétérinaires référents** avant de décider si un portail vaut son coût de développement et de maintenance.

### Axe 3 — Accompagnement des propriétaires

- [ ] **Créer une page pratique « Préparer ma consultation »** avec adresse, accès, documents et consignes uniquement après validation par la clinique.
- [ ] **Étudier un espace de questions fréquentes** relu par l’équipe, en langage clair, sans diagnostic en ligne ni conseil personnalisé automatisé.
- [ ] **Prévoir un accès rapide aux informations de contact** et à la marche à suivre après orientation.
- [ ] **Étudier des rappels de rendez-vous** seulement si l’organisation, le canal, le consentement et la gestion des coordonnées sont confirmés.
- [ ] **Tester le contenu auprès de propriétaires** pour vérifier qu’ils comprennent le rôle de CHAL’VET et celui de leur vétérinaire habituel.

### Axe 4 — Amélioration continue

- [ ] **Définir quelques indicateurs d’usage sobres** : accès au formulaire, erreurs de saisie, demandes abandonnées et consultation des informations pratiques.
- [ ] **Recueillir les retours des vétérinaires référents** après les premiers usages et établir une priorité de corrections.
- [ ] **Ajouter une version dans une autre langue** uniquement si les besoins du territoire et la capacité de maintenir les traductions sont confirmés.
- [ ] **Évaluer les coûts et responsabilités de maintenance** avant chaque nouveau service : hébergement, sécurité, sauvegardes, mises à jour et support.

## Ordre de décision recommandé

1. Valider le parcours de référé et le prototype avec l’équipe CHAL’VET.
2. Choisir les règles de confidentialité, le canal de transmission et le traitement des pièces.
3. Tester un formulaire minimal sécurisé avant de construire un espace professionnel.
4. N’ajouter un espace connecté, des rappels ou des traductions qu’après validation d’un besoin concret.
5. Tester toutes les évolutions avec des vétérinaires référents et des propriétaires avant lancement.

## Garde-fous

- Pas d’envoi réel dans le prototype actuel.
- Pas de stockage ou de transmission de données médicales sans processus et protection validés.
- Pas de téléconseil, de diagnostic automatisé ou de promesse de prise en charge urgente sans dispositif clinique défini.
- Toute information de suivi doit correspondre à un état réellement utilisé par l’équipe.
