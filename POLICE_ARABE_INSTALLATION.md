# Installation de la Police Arabe Decotype Thuluth II

## 📋 Guide d'Installation - Branche LYO

### 🎯 Objectif
Utiliser la police "Decotype Thuluth II" pour le texte officiel : **"الجمهورية الجزائرية الديمقراطية الشعبية"**

### 🔧 Implémentation Actuelle

#### Classes CSS Créées
```css
.algerian-republic-text {
  font-family: 'Decotype Thuluth II', 'Amiri', 'Traditional Arabic', 'Arabic Typesetting', serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.algerian-republic-text-large {
  font-family: 'Decotype Thuluth II', 'Amiri', 'Traditional Arabic', 'Arabic Typesetting', serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.4;
  letter-spacing: 0.8px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

.algerian-republic-text-small {
  font-family: 'Decotype Thuluth II', 'Amiri', 'Traditional Arabic', 'Arabic Typesetting', serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.3;
  letter-spacing: 0.3px;
}
```

#### Composants Modifiés
1. **AlgerianHeader.tsx** - Ligne 23 : Classe `algerian-republic-text-small`
2. **GovernmentHeader.tsx** - Ligne principale : Classe `algerian-republic-text-large`

### 📁 Installation de la Police Decotype Thuluth II

#### Option 1 : Police Web (Recommandée)
```css
/* Ajouter dans src/index.css */
@font-face {
  font-family: 'Decotype Thuluth II';
  src: url('./assets/fonts/DecotypeThuluthII.woff2') format('woff2'),
       url('./assets/fonts/DecotypeThuluthII.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

#### Option 2 : Google Fonts Alternative
Actuellement utilisé : **Amiri** (police arabe calligraphique similaire)
```css
@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
```

#### Option 3 : Fichiers de Police Locaux
1. Télécharger les fichiers de police Decotype Thuluth II
2. Placer dans `src/assets/fonts/`
3. Ajouter les déclarations @font-face

### 🎨 Utilisation

#### Dans les Composants React
```tsx
// Pour le texte principal
<span className="algerian-republic-text-large">
  الجمهورية الجزائرية الديمقراطية الشعبية
</span>

// Pour le texte secondaire
<span className="algerian-republic-text">
  الجمهورية الجزائرية الديمقراطية الشعبية
</span>

// Pour le texte petit
<span className="algerian-republic-text-small">
  الجمهورية الجزائرية الديمقراطية الشعبية
</span>
```

### 📍 Emplacements Appliqués

1. **Header Gouvernemental** (`GovernmentHeader.tsx`)
   - Texte principal centré
   - Classe : `algerian-republic-text-large`

2. **Header Algérien** (`AlgerianHeader.tsx`)
   - Bandeau supérieur
   - Classe : `algerian-republic-text-small`

### 🔄 Fallbacks de Police

La déclaration CSS inclut des polices de fallback :
1. **Decotype Thuluth II** (police cible)
2. **Amiri** (Google Fonts - calligraphique)
3. **Traditional Arabic** (système Windows)
4. **Arabic Typesetting** (système Windows)
5. **serif** (fallback générique)

### ✅ Vérification

Pour vérifier que la police fonctionne :
1. Ouvrir les outils de développement (F12)
2. Inspecter le texte arabe
3. Vérifier dans l'onglet "Computed" la police utilisée

### 📝 Notes Importantes

- La police "Decotype Thuluth II" doit être installée ou fournie via des fichiers web
- Les classes CSS sont prêtes et appliquées
- Le fallback "Amiri" fournit un rendu calligraphique de qualité
- La direction RTL est correctement configurée

### 🚀 Déploiement

- ✅ Classes CSS créées dans `src/index.css`
- ✅ Appliquées dans les composants header
- ✅ Testées sur la branche LYO
- ✅ Déployées sur GitHub

---
*Police arabe configurée pour la République Algérienne - Branche LYO*