import React from 'react';
import { Download, Info, FileSpreadsheet } from 'lucide-react';

const KOI_FEATURES = [
  'koi_score',
  'koi_period',
  'koi_impact',
  'koi_duration',
  'koi_depth',
  'koi_prad',
  'koi_sma',
  'koi_teq',
  'koi_model_snr',
];

const downloadCSVTemplate = () => {
  const headers = KOI_FEATURES.join(',');
  const exampleData1 = '0.95,3.52,0.1,2.5,500,1.2,0.05,580,10.0';
  const exampleData2 = '0.92,5.14,0.15,3.1,450,1.5,0.06,620,12.5';
  const csvContent = `${headers}\n${exampleData1}\n${exampleData2}`;
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', 'exoplanet_template.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadManualTemplate = () => {
  const headers = KOI_FEATURES.join(',');
  const exampleData = '0.95,3.52,0.1,2.5,500,1.2,0.05,580,10.0';
  const csvContent = `${headers}\n${exampleData}`;
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', 'manual_input_template.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const CSVTemplateCard = () => {
  return (
    <div className="w-full max-w-sm h-full bg-gradient-to-br from-gray-900/90 via-orange-900/20 to-yellow-900/20 p-4 md:p-6 rounded-xl shadow-2xl border border-orange-400/40 backdrop-blur-sm relative overflow-hidden flex flex-col">
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-500/10 animate-pulse"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <FileSpreadsheet className="w-6 md:w-7 h-6 md:h-7 text-orange-400" />
          <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            CSV Templates
          </h3>
        </div>

        <p className="text-gray-300 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
          📥 Download a template to correctly structure your data
        </p>

        {/* Template 1: CSV file (multiple rows) */}
        <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-800/60 rounded-lg border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300">
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <h4 className="text-base md:text-lg font-bold text-orange-300">CSV File</h4>
            <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Multiple</span>
          </div>
          
          {/* Preview */}
          <div className="bg-gray-900/70 p-2 md:p-3 rounded-lg border border-orange-500/20 overflow-x-auto mb-2 md:mb-3">
            <div className="text-xs font-mono">
              <div className="text-orange-300 font-bold mb-1 truncate">
                koi_score,koi_period,koi_impact...
              </div>
              <div className="text-gray-400 truncate">0.95,3.52,0.1,2.5,500...</div>
              <div className="text-gray-400 truncate">0.92,5.14,0.15,3.1,450...</div>
            </div>
          </div>

          <button
            onClick={downloadCSVTemplate}
            className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-xs md:text-sm border border-orange-500/50"
          >
            <Download className="w-3 md:w-4 h-3 md:h-4" />
            DOWNLOAD
          </button>
        </div>

        {/* Template 2: Manual input (1 row) */}
        <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-800/60 rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <h4 className="text-base md:text-lg font-bold text-purple-300">Manual Input</h4>
            <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">1 row</span>
          </div>
          
          {/* Preview */}
          <div className="bg-gray-900/70 p-2 md:p-3 rounded-lg border border-purple-500/20 overflow-x-auto mb-2 md:mb-3">
            <div className="text-xs font-mono">
              <div className="text-purple-300 font-bold mb-1 truncate">
                koi_score,koi_period,koi_impact...
              </div>
              <div className="text-gray-400 truncate">0.95,3.52,0.1,2.5,500...</div>
            </div>
          </div>

          <button
            onClick={downloadManualTemplate}
            className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-xs md:text-sm border border-purple-500/50"
          >
            <Download className="w-3 md:w-4 h-3 md:h-4" />
            DOWNLOAD
          </button>
        </div>

        {/* Info footer */}
        <div className="mt-auto p-2 md:p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
          <p className="text-xs text-blue-200 flex items-start gap-2">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>The files contain sample data to guide you. Edit them in Excel or any text editor.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSVTemplateCard;
