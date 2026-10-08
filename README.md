# Portfolio · Ladji Karamoko

> Ingénieur DevOps / Cloud en formation, MSc Pro Cloud à **Epitech Paris**.
> À la recherche d'une **alternance de 3 ans à partir de janvier 2027** (4 semaines en entreprise / 2 semaines à l'école).

🔗 **Site en ligne :** https://ladji.netlify.app

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-mobile%20%26%20desktop-F28B0C)

---

## Aperçu

Portfolio personnel en thème sombre (noir, orange, violet) qui présente mon profil, mes compétences, mon parcours, mes projets et un formulaire de contact.

## Sections

| Section         | Contenu                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Accueil**     | Présentation, accès au CV, disponibilité pour l'alternance                                               |
| **À propos**    | Formation, titre RNCP 7 visé, localisation, rythme d'alternance                                          |
| **Compétences** | Cloud, DevOps, réseau et sécurité, systèmes, langages, web et bases de données                           |
| **Parcours**    | Expériences professionnelles et formation sous forme de frise                                            |
| **Projets**     | Kubernetes (GKE), audit de sécurité Linux, chat temps réel, plateforme full stack, CI/CD, scripts Python |
| **Soft skills** | Savoir-être, langues et loisirs                                                                          |
| **Contact**     | Coordonnées et formulaire de contact                                                                     |

## Fonctionnalités

- **Responsive** : s'adapte à l'ordinateur, la tablette et le mobile, avec un menu burger sur petit écran
- **Animations** : apparition du haut de page au chargement, effet de frappe de commandes (`kubectl`, `docker`, `ansible`…), sections qui apparaissent au défilement
- **Navigation** : lien actif selon la section affichée, barre de progression de lecture, bouton de retour en haut
- **Formulaire de contact** : validation des champs, protection anti-spam (honeypot), compatible Netlify Forms
- **Accessibilité** : navigation au clavier, focus visible, animations désactivées si l'utilisateur a choisi de réduire les animations dans son système

## Technologies

- **HTML5** : structure sémantique (`header`, `main`, `section`, `article`)
- **CSS3** : variables CSS, Grid, Flexbox, animations `@keyframes`, media queries
- **JavaScript (vanilla)** : `IntersectionObserver`, Clipboard API, Fetch API
- **Polices** : Urbanist et Poppins (Google Fonts)

Aucun framework ni dépendance : le site fonctionne sans installation ni étape de build.

## Structure du projet

```
├── index.html      # Structure et contenu du site
├── style.css       # Thème, mise en page, animations, responsive
├── script.js       # Menu mobile, effet de frappe, animations au scroll, formulaire
├── images/
│   └── ladji.jpeg  # Photo de profil
└── README.md
```

## Lancer le projet en local

Ouvrir `index.html` dans un navigateur, ou utiliser l'extension **Live Server** de VS Code.

## Déploiement

- **GitHub Pages** : le site est publié à chaque `git push` sur la branche `main`. Le formulaire de contact n'y envoie pas de messages.
- **Netlify** : glisser-déposer le dossier sur https://app.netlify.com/drop. Le formulaire fonctionne, et les messages apparaissent dans l'onglet **Forms**.

## Contact

- **Email :** ladji.karamoko@epitech.eu
- **LinkedIn :** [Ladji Karamoko](https://www.linkedin.com/in/ladjikaramokoa30532319)
- **Localisation :** Aubervilliers (93300), Île-de-France

---

© 2026 Ladji Karamoko
