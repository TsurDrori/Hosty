import { useEffect, useState } from 'react';

export function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {Array(200)
        .fill()
        .map((_, i) => (
          <p key={i}>lorem ipsum {scrollPosition}</p>
        ))}
    </div>
  );
}
