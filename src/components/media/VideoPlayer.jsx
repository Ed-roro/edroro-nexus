"use client";

import { useRef, useState, useEffect } from 'react';
import { Box, IconButton, Slider, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

// Styled components
const PlayerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  backgroundColor: '#000',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const VideoElement = styled('video')({
  width: '100%',
  height: 'auto',
  display: 'block',
});

const Controls = styled(Box)(({ theme, visible }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1, 2),
  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
  transition: 'opacity 0.3s ease',
  opacity: visible ? 1 : 0,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const ProgressSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 4,
  '& .MuiSlider-thumb': {
    width: 12,
    height: 12,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${theme.palette.primary.main}33`,
    },
    '&.Mui-active': {
      width: 16,
      height: 16,
    },
  },
  '& .MuiSlider-rail': {
    opacity: 0.28,
  },
}));

const VolumeSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: 80,
  height: 4,
  '& .MuiSlider-thumb': {
    width: 10,
    height: 10,
  },
}));

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

/**
 * Custom video player component
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Video source URL
 * @param {string} props.poster - Video poster image URL
 * @param {boolean} props.autoPlay - Auto play video
 * @param {boolean} props.muted - Mute video
 * @param {boolean} props.controls - Show native controls (fallback)
 * @param {string} props.className - Additional CSS class
 */
export const VideoPlayer = ({
  src,
  poster,
  autoPlay = false,
  muted = false,
  controls = false,
  className = '',
}) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(muted ? 0 : 1);
  const [showControls, setShowControls] = useState(true);
  const [controlsTimeout, setControlsTimeout] = useState(null);

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  // Handle volume change
  const handleVolumeChange = (_, newValue) => {
    if (videoRef.current) {
      videoRef.current.volume = newValue;
      setVolume(newValue);
      if (newValue === 0) {
        videoRef.current.muted = true;
      } else {
        videoRef.current.muted = false;
      }
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        setVolume(videoRef.current.volume || 1);
      } else {
        videoRef.current.muted = true;
        setVolume(0);
      }
    }
  };

  // Handle seeking
  const handleSeek = (_, newValue) => {
    if (videoRef.current) {
      videoRef.current.currentTime = (newValue / 100) * videoRef.current.duration;
    }
  };

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // Show/hide controls on mouse movement
  const handleMouseMove = () => {
    setShowControls(true);
    
    if (controlsTimeout) {
      clearTimeout(controlsTimeout);
    }
    
    const timeout = setTimeout(() => {
      if (playing) {
        setShowControls(false);
      }
    }, 3000);
    
    setControlsTimeout(timeout);
  };

  // Update time display
  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;
    
    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };
    
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateTime);
    video.addEventListener('play', () => setPlaying(true));
    video.addEventListener('pause', () => setPlaying(false));
    
    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateTime);
      video.removeEventListener('play', () => setPlaying(true));
      video.removeEventListener('pause', () => setPlaying(false));
    };
  }, []);

  // Clean up timeout
  useEffect(() => {
    return () => {
      if (controlsTimeout) {
        clearTimeout(controlsTimeout);
      }
    };
  }, [controlsTimeout]);

  // Calculate progress percentage
  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <PlayerContainer 
      className={className} 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => playing && setShowControls(false)}
    >
      <VideoElement
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        controls={false}
        playsInline
        onClick={togglePlay}
      />
      
      <Controls visible={showControls}>
        <ProgressSlider
          value={progress}
          onChange={handleSeek}
          aria-label="Video progress"
        />
        
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton color="inherit" size="small" onClick={togglePlay}>
              {playing ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            
            <Typography variant="caption" color="white">
              {formatTime(currentTime)} / {formatTime(duration)}
            </Typography>
          </Stack>
          
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton color="inherit" size="small" onClick={toggleMute}>
              {volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </IconButton>
            
            <VolumeSlider
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={1}
              step={0.01}
              aria-label="Volume"
            />
            
            <IconButton color="inherit" size="small" onClick={toggleFullscreen}>
              <FullscreenIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Controls>
    </PlayerContainer>
  );
};

export default VideoPlayer;