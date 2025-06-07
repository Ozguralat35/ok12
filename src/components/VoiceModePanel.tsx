import React from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { RobotAvatar } from './RobotAvatar';

interface VoiceModePanelProps {
  isVoiceMode: boolean;
  isListening: boolean;
  isSpeaking: boolean;
  isLoading: boolean;
  autoSpeak: boolean;
  speechRecognitionSupported: boolean;
  speechSynthesisSupported: boolean;
  onVoiceToggle: () => void;
  onAutoSpeakToggle: () => void;
}

export const VoiceModePanel: React.FC<VoiceModePanelProps> = ({
  isVoiceMode,
  isListening,
  isSpeaking,
  isLoading,
  autoSpeak,
  speechRecognitionSupported,
  speechSynthesisSupported,
  onVoiceToggle,
  onAutoSpeakToggle
}) => {
  return (
    <div className="border-b border-gray-200 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 flex-shrink-0">
      <div className="max-w-4xl mx-auto">
        {/* Robot and Status */}
        <div className="flex items-center justify-center mb-4">
          <div className="text-center">
            <RobotAvatar 
              size="lg"
              isListening={isListening}
              isSpeaking={isSpeaking}
              isThinking={isLoading}
            />
            <div className="mt-3">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                TURGUT ÖZAL KAİHL Asistanı
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                {isListening && (
                  <div className="flex items-center gap-2 text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">🎤 Dinleniyor... Konuşun!</span>
                  </div>
                )}
                {isSpeaking && (
                  <div className="flex items-center gap-2 text-blue-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">🔊 Yanıt okunuyor...</span>
                  </div>
                )}
                {isLoading && !isSpeaking && (
                  <div className="flex items-center gap-2 text-orange-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">⏳ Yanıt hazırlanıyor...</span>
                  </div>
                )}
                {!isListening && !isSpeaking && !isLoading && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span className="text-sm font-medium">✅ Hazır - Konuşmaya başlayın</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Voice Mode Info */}
        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 mb-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">
              🔄 <strong>Otomatik Sesli Konuşma Aktif</strong>
            </p>
            <p className="text-xs text-gray-500">
              Konuş → Otomatik gönder → Yanıt al → Otomatik oku → Tekrar dinle
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={onVoiceToggle}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors font-medium shadow-lg text-sm"
          >
            <MicOff className="w-4 h-4" />
            Sesli Modu Durdur
          </button>
          
          {speechSynthesisSupported && (
            <button
              onClick={onAutoSpeakToggle}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors font-medium text-sm ${
                autoSpeak
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {autoSpeak ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              Otomatik Ses
            </button>
          )}
        </div>
      </div>
    </div>
  );
};