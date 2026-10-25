# Portfolio · Ladji Karamoko

🔗 Site en ligne : https://ladji.netlify.app

> Ingénieur DevOps / Cloud en formation, MSc Pro Cloud à **Epitech Paris**.
> À la recherche d'une **alternance de 3 ans à partir de janvier 2027** (4 semaines en entreprise / 2 semaines à l'école).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-mobile%20%26%20desktop-F28B0C)

---

## Aperçu

Portfolio personnel en thème sombre (noir, orange, violet). Le site est découpé en **pages** : une seule est affichée à la fois, et le menu permet de passer de l'une à l'autre. L'adresse change selon la page (`#about`, `#projects`…), ce qui permet de partager un lien direct et d'utiliser le bouton « retour » du navigateur.

## Pages

| Page                 | Ancre        | Contenu                                                                                          |
| -------------------- | ------------ | ------------------------------------------------------------------------------------------------ |
| **Accueil**          | `#accueil`   | Phrase d'accroche, photo, accès au CV (PDF), bouton vers le formulaire de contact                |
| **Qui suis-je ?**    | `#about`     | Présentation, formation, rythme d'alternance, disponibilité                                      |
| **Mon parcours**     | `#parcours`  | Études, expériences professionnelles et hors école (VivaTech…), progression de l'année, outils   |
| **Compétences**      | `#skills`    | Cloud, DevOps, réseau et sécurité, systèmes, langages, web et bases de données                   |
| **Mes réalisations** | `#projects`  | Projets Epitech et personnels : contexte, objectif, technologies, liens ; filtres par catégorie  |
| **Soft skills**      | `#soft`      | Savoir-être, langues et loisirs                                                                  |
| **Contact**          | `#contact`   | Coordonnées, réseaux et formulaire de contact                                                    |

## Fonctionnalités

- **Responsive** : ordinateur, tablette et mobile, avec un menu burger sur petit écran
- **Navigation** : la page en cours est mise en évidence dans le menu (ordinateur et mobile)
- **Animations** : apparition de l'accueil, effet de frappe de commandes (`kubectl`, `docker`, `ansible`…)
- **Formulaire de contact** : validation des champs, champ piège anti-spam, envoi par email via [Web3Forms](https://web3forms.com)
- **Accessibilité** : textes alternatifs, titres hiérarchisés, navigation au clavier, focus visible, animations désactivées si l'utilisateur a choisi de les réduire dans son système

## Technologies

- **HTML5** : structure sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** : variables CSS, Grid, Flexbox, animations `@keyframes`, media queries
- **JavaScript (vanilla)** : navigation entre les pages, onglets, filtres, Fetch API pour le formulaire

Aucun framework ni étape de build : le site fonctionne tel quel.

## Structure du projet

```
├── image/
│   └── ladji.jpeg           # Photo de profil
├── CV-LADJI-KARAMOKO.pdf    # CV téléchargeable depuis le site
├── index.html               # Structure et contenu de toutes les pages
├── style.css                # Thème, mise en page, animations, responsive
├── javascript.js            # Navigation, menu mobile, effet de frappe, onglets, filtres, formulaire
└── README.md
```

## Lancer le projet en local

Ouvrir `index.html` dans un navigateur, ou utiliser l'extension **Live Server** de VS Code.

## Déploiement

Le site est hébergé sur **Netlify** : https://ladji.netlify.app

La publication est **automatique** : un seul `git push` envoie le code à la fois sur le dépôt Epitech et sur un dépôt miroir de mon compte GitHub personnel. Netlify est relié à ce dépôt miroir : il récupère chaque push sur `main` et met le site en ligne. Aucune étape de build : les fichiers sont publiés tels quels.

Pourquoi un miroir : l'organisation GitHub d'Epitech n'autorise ni l'installation de l'application Netlify, ni l'exécution de GitHub Actions. Netlify ne peut donc pas être relié directement au dépôt Epitech.

Configuration du double push (une seule fois) :

```bash
git remote set-url --add --push origin git@github.com:EpitechMscProPromo2029/T-ENT-500-PAR-5-1-portfolio-21.git
git remote set-url --add --push origin git@github.com:karmokolassina22/portfolio.git
git remote -v   # doit afficher les deux adresses en (push)
```

Réglages Netlify (**Deploy settings → Repository**) : dépôt `karmokolassina22/portfolio`, branche `main`, build command vide, publish directory `.`.

Le suivi des déploiements se fait dans l'onglet **Deploys** du site sur Netlify.

Netlify a été choisi plutôt que GitHub Pages pour disposer d'une adresse courte et professionnelle, à mettre sur le CV.

## Formulaire de contact

Le formulaire est envoyé par [Web3Forms](https://web3forms.com) directement depuis le navigateur (pas de backend) : les messages arrivent par email. La clé d'accès se trouve en haut de la partie formulaire de `javascript.js`.

## Crédits

- **Polices** : [Urbanist](https://fonts.google.com/specimen/Urbanist) et [Poppins](https://fonts.google.com/specimen/Poppins), Google Fonts, licence SIL Open Font License
- **Icônes** : [Font Awesome Free](https://fontawesome.com), licence CC BY 4.0
- **Design** : inspiré du portfolio de Félix-Gautier Akoto Yao
- **Photo** : photo personnelle

## Contact

- **Email :** ladji.karamoko@epitech.eu
- **LinkedIn :** [Ladji Karamoko](https://www.linkedin.com/in/ladjikaramokoa30532319)
- **GitHub :** [karmokolassina22](https://github.com/karmokolassina22)
- **Localisation :** Aubervilliers (93300), Île-de-France

---

© 2026 Ladji Karamoko
