import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Loader2 } from 'lucide-react';

const ClassificationResult = ({ result, isLoading, error }) => {
     
  // 1. Gérer l'état de l'ERREUR avec animation
  if (error) {
    return (
      <div className="mt-16 mx-auto max-w-4xl px-4 animate-fadeIn">
        <div className="p-6 md:p-8 rounded-2xl text-center border-2 border-red-500/50 bg-gradient-to-br from-red-900/40 to-red-800/30 backdrop-blur-sm shadow-2xl shadow-red-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 animate-pulse"></div>
          
          <div className="relative z-10">
            <XCircle className="w-16 md:w-20 h-16 md:h-20 text-red-400 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl md:text-3xl orbitron text-red-400 font-bold mb-4">Classification Error</h3>
            <p className="text-base md:text-lg text-red-300 mb-2">{error}</p>
            <p className="text-xs md:text-sm text-gray-400 mt-6 italic">
              💡 Check submitted data
            </p>
          </div>
        </div>
      </div>
    );
  }
     
  // 2. Gérer l'état de CHARGEMENT avec spinner élégant
  if (isLoading) {
    return (
      <div className="mt-16 mx-auto max-w-4xl px-4 animate-fadeIn">
        <div className="p-8 md:p-12 rounded-2xl text-center border-2 border-blue-500/50 bg-gradient-to-br from-blue-900/40 to-purple-900/30 backdrop-blur-sm shadow-2xl shadow-blue-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
          
          <div className="relative z-10">
            <Loader2 className="w-12 md:w-16 h-12 md:h-16 text-blue-400 mx-auto mb-6 animate-spin" />
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold mb-2">
              Analyse IA en cours...
            </p>

            <div className="mt-6 flex justify-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
     
  // 3. État initial (aucun résultat)
  if (!result) {
    return (
      <div className="mt-16 mx-auto max-w-4xl px-4">
        <div className="p-6 md:p-8 rounded-2xl text-center border-2 border-gray-700 bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-sm shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 via-transparent to-gray-500/5"></div>
          
          <div className="relative z-10">
            <AlertTriangle className="w-12 md:w-16 h-12 md:h-16 text-gray-500 mx-auto mb-4 opacity-50" />
            <p className="text-lg md:text-xl orbitron text-blue-400 font-light">
              ⚡ Le résultat de l'analyse s'affichera ici
            </p>
            <p className="text-gray-500 orbitron text-xs md:text-sm mt-2">Soumettez des données pour commencer</p>
          </div>
        </div>
      </div>
    );
  }
     
  // 4. Afficher le RÉSULTAT FINAL avec animation
  const isConfirmed = result.prediction && result.prediction.includes('Confirmée');
  const isCandidate = result.prediction && result.prediction.includes('Candidat');
  
  const gradientBg = isConfirmed 
    ? 'from-green-900/40 to-emerald-900/30' 
    : isCandidate 
    ? 'from-yellow-900/40 to-orange-900/30'
    : 'from-red-900/40 to-pink-900/30';
    
  const borderColor = isConfirmed 
    ? 'border-green-500/50' 
    : isCandidate 
    ? 'border-yellow-500/50'
    : 'border-red-500/50';
    
  const iconColor = isConfirmed 
    ? 'text-green-400' 
    : isCandidate 
    ? 'text-yellow-400'
    : 'text-red-400';
    
  const shadowColor = isConfirmed 
    ? 'shadow-green-500/30' 
    : isCandidate 
    ? 'shadow-yellow-500/30'
    : 'shadow-red-500/30';
    
  const Icon = isConfirmed ? CheckCircle : isCandidate ? AlertTriangle : XCircle;
   
  return (
    <div className="mt-16 mx-auto max-w-4xl px-4 animate-fadeIn">
      <div className={`p-8 md:p-12 rounded-2xl text-center border-2 ${borderColor} bg-gradient-to-br ${gradientBg} backdrop-blur-sm shadow-2xl ${shadowColor} relative overflow-hidden`}>
        
        {/* Effet de lueur animée */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        
        <div className="relative z-10">
          {/* Icône animée */}
          <div className="mb-6 md:mb-8">
            <Icon className={`w-16 md:w-24 h-16 md:h-24 ${iconColor} mx-auto animate-scaleIn`} />
          </div>
          
          {/* Badge de statut */}
          <div className="inline-block px-4 md:px-6 py-2 rounded-full bg-gray-900/50 border border-white/20 mb-4 md:mb-6">
            <p className="text-xs md:text-sm orbitron text-gray-300 uppercase tracking-widest font-semibold">
              Résultat de l'analyse IA
            </p>
          </div>
                   
          {/* Résultat Principal */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl orbitron font-extrabold mb-4 md:mb-6 text-white tracking-tight animate-fadeInUp">
            {result.prediction}
          </h3>
                   
          {/* Barre de confiance */}
          <div className="max-w-md mx-auto mb-4 md:mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 orbitron text-xs md:text-sm font-medium">Confiance du Modèle</span>
              <span className={`text-xl md:text-2xl font-bold ${iconColor}`}>{result.confidence}%</span>
            </div>
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${
                  isConfirmed 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-400' 
                    : isCandidate
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-400'
                    : 'bg-gradient-to-r from-red-500 to-pink-400'
                } shadow-lg`}
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
          </div>
          
          {/* Message contextuel */}
          <p className="text-gray-300 orbitron text-base md:text-lg mt-6 md:mt-8 leading-relaxed">
            {isConfirmed && "✨ Cette exoplanète présente des caractéristiques confirmées !"}
            {isCandidate && "🔍 Cette cible nécessite des observations supplémentaires."}
            {!isConfirmed && !isCandidate && "❌ Les données suggèrent un faux positif."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassificationResult;