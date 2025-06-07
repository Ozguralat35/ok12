import React from 'react';

interface RobotAvatarProps {
  isListening?: boolean;
  isSpeaking?: boolean;
  isThinking?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const RobotAvatar: React.FC<RobotAvatarProps> = ({ 
  isListening = false, 
  isSpeaking = false, 
  isThinking = false,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const getStatusColor = () => {
    if (isListening) return 'from-green-400 to-green-600';
    if (isSpeaking) return 'from-blue-400 to-blue-600';
    if (isThinking) return 'from-orange-400 to-orange-600';
    return 'from-gray-400 to-gray-600';
  };

  const getStatusText = () => {
    if (isListening) return 'Dinliyor...';
    if (isSpeaking) return 'Konuşuyor...';
    if (isThinking) return 'Düşünüyor...';
    return 'Hazır';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Outer glow ring */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getStatusColor()} opacity-30 ${
          isListening || isSpeaking ? 'animate-pulse' : ''
        } blur-sm scale-110`}></div>
        
        {/* Robot container */}
        <div className={`relative ${sizeClasses[size]} rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-slate-600 shadow-xl overflow-hidden`}>
          {/* Robot face background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800"></div>
          
          {/* Eyes */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getStatusColor()} ${
              isListening || isSpeaking ? 'animate-pulse' : ''
            } shadow-lg`}></div>
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getStatusColor()} ${
              isListening || isSpeaking ? 'animate-pulse' : ''
            } shadow-lg`}></div>
          </div>
          
          {/* Mouth/Speaker */}
          <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
            <div className={`w-3 h-1 rounded-full bg-gradient-to-r ${getStatusColor()} ${
              isSpeaking ? 'animate-bounce' : ''
            }`}></div>
          </div>
          
          {/* Antenna */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-2 bg-slate-400"></div>
            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${getStatusColor()} ${
              isListening ? 'animate-ping' : ''
            }`}></div>
          </div>
          
          {/* Circuit patterns */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Status indicator */}
        {(isListening || isSpeaking || isThinking) && (
          <div className="absolute -bottom-1 -right-1">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getStatusColor()} border-2 border-white shadow-lg ${
              isListening || isSpeaking ? 'animate-pulse' : ''
            }`}></div>
          </div>
        )}
      </div>
      
      {/* Status text */}
      {size === 'xl' && (
        <div className="mt-2 text-xs text-gray-600 font-medium">
          {getStatusText()}
        </div>
      )}
    </div>
  );
};