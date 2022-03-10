import { useEffect, useState } from 'react';

function showTxt(text, isLongTxtShown) {
  if (isLongTxtShown) return text;
  else return text.substr(0, 150);
}

export function ReadMore({ text }) {
  const [isLongTxtShown, setisLongTxtShown] = useState(false);
  // const [showMore, setShowMore] = useState(true);

  // useEffect(() => {
  //   if (200 > text.length) {
  //     setShowMore(false);
  //   }
  // }, [text]);

  const onToggle = () => {
    setisLongTxtShown(!isLongTxtShown);
  };

  return (
    <section className='txt'>
      {text.length > 150 ? showTxt(text, isLongTxtShown) + '...' : showTxt(text, isLongTxtShown) + ' '}
      {text.length > 150 && <p onClick={onToggle}>{isLongTxtShown ? ' Less...' : ' More...'}</p>}
    </section>
  );
}
