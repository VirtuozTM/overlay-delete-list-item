# 📱 Animated-Delete-Overlay

<p align="center">
  <video src="https://github.com/user-attachments/assets/3297a8ea-1498-4ed3-81d6-ad4468003735"/>
</p>
 
## 📌 Objectif

Ce projet a été conçu pour apporter une expérience utilisateur immersive et fluide lorsqu’un élément d’une liste est supprimé.
Plutôt qu’un simple Alert ou une suppression brutale, une overlay animée et floutée vient recouvrir l’interface, confirmant visuellement l’action de suppression.

🧠 Inspiré du superbe travail de [Eds2002](https://github.com/eds2002/immersive-overlay-example), cette version adapte le concept aux contraintes d’une app React Native moderne avec Reanimated, Skia et expo-blur.

## 🎯 Fonctionnalités principales

- **🧼 Overlay animé** : apparition fluide d’un overlay visuel lors de l’action de suppression.
- **📦 Intégration facile** : pensé comme un composant modulaire, activable depuis n’importe quelle action (swipe, long press, etc.).
- **🎨 Effet blur immersif** : l’overlay floute le contenu en arrière-plan pour recentrer l’attention.
- **🌀 Animation Skia** : les éléments visuels (cercles, fond dégradé, etc.) sont animés grâce à Skia pour un rendu ultra fluide.

## ⚙️ Technologies utilisées

L'application est développée avec :

- **React Native** (via Expo ou CLI) pour la base de l’application
- **@gorhom/bottom-sheet** pour la gestion des bottom sheets
- **react-native-reanimated** pour des animations performantes
- **TypeScript** (optionnel) pour une meilleure maintenabilité

## 📦 Bibliothèques principales

Voici un aperçu des dépendances utilisées dans le projet :

### 🏗️ **Technologies utilisées**

- [@shopify/react-native-skia](https://shopify.github.io/react-native-skia/) : rendu graphique haute performance pour dessiner et animer les éléments de l’overlay.
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) : moteur d’animation performant et natif
- [expo-blur](https://docs.expo.dev/versions/latest/sdk/blur-view/) : ajout d’un effet de flou natif sur le fond lors de l’activation de l’overlay.

## 🚀 **Comment démarrer ?**

### 1️⃣ Cloner le projet

`git clone https://github.com/VirtuozTM/overlay-delete-list-item.git`

`cd overlay-delete-list-item`

### 2️⃣ Installer les dépendances

`npm install`

### 3️⃣ Lancer l'application en mode développement

`npm run start`

📌 **Astuce** : Utilisez l'application Expo Go sur votre téléphone pour tester immédiatement l'application !

## 📬 Contact

Si vous avez des questions ou suggestions, n'hésitez pas à me contacter ! 😊

**Armand PETIT**

🖥️ Développeur React Native

📧 [armand_petit@outlook.fr](mailto:armand_petit@outlook.fr)

📅 [Réserver un appel](https://calendly.com/armand_petit/30min)
