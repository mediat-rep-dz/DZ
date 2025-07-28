#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 VÉRIFICATION FORCÉE DES CHANGEMENTS - BRANCHE LYO\n');

// Tests des fichiers modifiés
const tests = [
  {
    file: 'src/components/news-references/DictionariesSection.tsx',
    search: 'Dictionnaires juridiques',
    description: 'Changement nom onglet Dictionnaire'
  },
  {
    file: 'src/components/news-references/LibraryTabs.tsx', 
    search: 'grid-cols-7',
    description: 'Extension à 7 onglets dans Bibliothèque'
  },
  {
    file: 'src/components/news-references/LibraryTabs.tsx',
    search: 'Dictionnaires juridiques',
    description: 'Nouvel onglet Dictionnaires juridiques'
  },
  {
    file: 'src/components/news-references/LibraryTabs.tsx',
    search: 'Terminologie Spécialisée', 
    description: 'Nouvel onglet Terminologie Spécialisée'
  },
  {
    file: 'src/components/forms/AddDictionnaireJuridiqueForm.tsx',
    search: 'Ajouter un Dictionnaire Juridique',
    description: 'Formulaire spécialisé dictionnaires'
  },
  {
    file: 'src/components/forms/AddTerminologieSpecialiseeForm.tsx',
    search: 'Ajouter une Terminologie Spécialisée',
    description: 'Formulaire spécialisé terminologie'
  },
  {
    file: 'src/components/common/LibraryFormHandler.tsx',
    search: 'dictionnaire-juridique',
    description: 'Types uniques pour routage formulaires'
  }
];

let allPassed = true;

tests.forEach((test, index) => {
  try {
    const filePath = path.join(__dirname, test.file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(test.search)) {
      console.log(`✅ Test ${index + 1}: ${test.description}`);
      console.log(`   📁 ${test.file}`);
      console.log(`   🔍 Trouvé: "${test.search}"\n`);
    } else {
      console.log(`❌ Test ${index + 1}: ${test.description}`);
      console.log(`   📁 ${test.file}`);
      console.log(`   🔍 Pas trouvé: "${test.search}"\n`);
      allPassed = false;
    }
  } catch (error) {
    console.log(`❌ Test ${index + 1}: Erreur lecture fichier ${test.file}`);
    console.log(`   ⚠️  ${error.message}\n`);
    allPassed = false;
  }
});

// Vérification des nouveaux fichiers créés
const newFiles = [
  'src/components/news-references/library/DictionnairesJuridiquesTab.tsx',
  'src/components/news-references/library/TerminologieSpecialiseeTab.tsx',
  'src/components/forms/AddDictionnaireJuridiqueForm.tsx',
  'src/components/forms/AddTerminologieSpecialiseeForm.tsx'
];

console.log('📂 VÉRIFICATION DES NOUVEAUX FICHIERS:\n');

newFiles.forEach((file, index) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ Fichier ${index + 1}: ${file}`);
    console.log(`   📊 Taille: ${Math.round(stats.size / 1024)}KB`);
    console.log(`   📅 Modifié: ${stats.mtime.toLocaleString()}\n`);
  } else {
    console.log(`❌ Fichier ${index + 1}: ${file} - INTROUVABLE\n`);
    allPassed = false;
  }
});

// Résultat final
console.log('=' .repeat(60));
if (allPassed) {
  console.log('🎉 TOUS LES CHANGEMENTS SONT PRÉSENTS DANS LE CODE !');
  console.log('🌐 Application disponible sur: http://localhost:8080');
  console.log('💡 Si vous ne voyez pas les changements:');
  console.log('   1. Videz le cache de votre navigateur (Ctrl+Shift+R)');
  console.log('   2. Utilisez le mode incognito');
  console.log('   3. Vérifiez la console navigateur (F12)');
} else {
  console.log('⚠️  CERTAINS CHANGEMENTS SONT MANQUANTS');
  console.log('🔧 Vérifiez les fichiers signalés ci-dessus');
}
console.log('=' .repeat(60));