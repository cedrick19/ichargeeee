import { ReactElement, useEffect, useRef } from "react";
import promotional from "@/assets/icharge.webm";

const VideoComponent = (): ReactElement => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const threshold = 0.5;

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handlePlayPause = async (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        try {
          await videoElement.play();
        } catch (error) {
          console.error("Video play was interrupted: ", error);
        }
      } else {
        videoElement.pause();
      }
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold,
    });

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, [threshold]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      autoPlay={false}
      playsInline
      aria-label="iCharge"
      className="absolute inset-0 h-[90vh] w-full rounded-bl-[5rem] border-b-2 border-white bg-black object-cover shadow-2xl brightness-[30%] transition-opacity duration-1000"
    >
      <source
        // src="https://joospower.com/wp-content/uploads/2023/10/Joos-Advert-final.mp4"
        src={promotional}
        type="video/mp4"
      />
    </video>
  );
};

export default VideoComponent;
