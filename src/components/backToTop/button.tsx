import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import './styles.css'
import { useState } from 'react'

export function BackTotop() {
  const [shouldStyleOnScroll, setShouldStyleOnScroll] = useState(true);

  useScrollPosition(
    ({ currPos }) => {
      const isOnTop = currPos.y > -350;
      const hidden= currPos.y < 349;

        if (isOnTop !== shouldStyleOnScroll)
          setShouldStyleOnScroll(isOnTop);
          else if (hidden < shouldStyleOnScroll) 
          setShouldStyleOnScroll(hidden);
      },
      [shouldStyleOnScroll],
      undefined,
      false,
      100,
  );

  return(
    <a href="#header" className={`${shouldStyleOnScroll ? '' : 'show'}`}>
      <BsFillArrowUpCircleFill />
    </a>
  )
}