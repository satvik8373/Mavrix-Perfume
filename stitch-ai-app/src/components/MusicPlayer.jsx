import { useState, useRef, useEffect } from 'react';
import musicFile from '../assets/Music/model-walks-runway-366957.mp3';

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume to 50%
    audio.volume = 0.5;

    // Auto-play music
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Auto-play was prevented, user interaction required
      });
    }

    // Loop the music
    audio.loop = true;
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicFile} preload="auto" loop />
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-10 rounded-full bg-white/90 hover:bg-white backdrop-filter blur-md border border-gray-200/50 text-gray-700 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        <span className="material-symbols-outlined text-xl">
          {isMuted ? 'volume_off' : 'volume_up'}
        </span>
      </button>
    </>
  );
}

