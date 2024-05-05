'use client';

import { useEffect, useRef } from 'react';

import { VideoProps } from '@/interfaces';
import { requestAudioPermission } from '@/utils/utils';

const Video = ({
  src,
  muted = true,
  className = '',
  keepPlaying = false,
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentVideo = videoRef.current;

    if (keepPlaying) {
      currentVideo?.play();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          currentVideo?.play();
        } else {
          currentVideo?.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, [keepPlaying]);

  // useEffect(() => {
  //   if (!muted) {
  //     requestAudioPermission();
  //   }
  // }, [muted]);

  return (
    <video ref={videoRef} muted={muted} loop className={className}>
      <source src={src} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
