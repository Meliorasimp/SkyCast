import React, { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  animationType: "pulse" | "twinkle" | "glow";
  layer: "far" | "mid" | "close";
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  drift: number;
}

const Stars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 120;

      for (let i = 0; i < starCount; i++) {
        const layer = i < 40 ? "far" : i < 80 ? "mid" : "close";
        const animationType =
          Math.random() < 0.4
            ? "pulse"
            : Math.random() < 0.7
            ? "twinkle"
            : "glow";

        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size:
            layer === "far"
              ? Math.random() * 1.5 + 0.5
              : layer === "mid"
              ? Math.random() * 2.5 + 1
              : Math.random() * 3.5 + 1.5,
          opacity:
            layer === "far"
              ? Math.random() * 0.4 + 0.2
              : layer === "mid"
              ? Math.random() * 0.6 + 0.3
              : Math.random() * 0.8 + 0.4,
          animationDelay: Math.random() * 5,
          animationType,
          layer,
        });
      }
      setStars(newStars);
    };

    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = 30;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          drift: Math.random() * 0.5 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    generateStars();
    generateParticles();
  }, []);

  const getAnimationClass = (type: string) => {
    switch (type) {
      case "pulse":
        return "animate-pulse";
      case "twinkle":
        return "animate-ping";
      case "glow":
        return "animate-bounce";
      default:
        return "animate-pulse";
    }
  };

  const getAnimationDuration = (type: string) => {
    switch (type) {
      case "pulse":
        return "2s";
      case "twinkle":
        return "3s";
      case "glow":
        return "4s";
      default:
        return "2s";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent opacity-60" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl" />

      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-white/30 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.drift + 3}s`,
            transform: "translateZ(0)",
          }}
        />
      ))}

      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${getAnimationClass(
            star.animationType
          )} ${
            star.layer === "far"
              ? "bg-blue-200"
              : star.layer === "mid"
              ? "bg-white"
              : "bg-yellow-100"
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: getAnimationDuration(star.animationType),
            boxShadow:
              star.layer === "close"
                ? `0 0 ${star.size * 2}px rgba(255,255,255,0.3)`
                : "none",
            transform: "translateZ(0)",
          }}
        />
      ))}

      <div
        className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 animate-ping"
        style={{
          animationDelay: "8s",
          animationDuration: "0.8s",
          transform: "rotate(-15deg) translateX(-100%)",
          animation: "shooting-star 12s infinite",
        }}
      />
    </div>
  );
};

export default Stars;
