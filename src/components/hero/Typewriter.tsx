import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
};

export function Typewriter({
  words,
  typeSpeed = 220,
  deleteSpeed = 120,
  pause = 1800,
  className = "",
}: Props) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const word = words[index];
    const isFull = text === word;
    const isEmpty = text === "";

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && isFull) delay = pause; // hold the finished word
    if (deleting && isEmpty) delay = 300; // short beat before next word

    const id = setTimeout(() => {
      if (!deleting && isFull) {
        setDeleting(true);
      } else if (deleting && isEmpty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(id);
  }, [
    text,
    deleting,
    index,
    words,
    typeSpeed,
    deleteSpeed,
    pause,
    reduceMotion,
  ]);

  // Reduced motion: show the first word, no animation
  if (reduceMotion) {
    return <span className={`text-ac ${className}`}>{words[0]}</span>;
  }

  return (
    <span className={`text-ac ${className}`} aria-hidden>
      {text}
      <motion.span
        className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] rounded-sm bg-ac"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}
