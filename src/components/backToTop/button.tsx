import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import './styles.css'
import { useState } from 'react'

export function BackTotop() {
  const [shouldStyleOnScroll, setShouldStyleOnScroll] = useState(true);

  useScrollPosition(
    ({ currPos }) => {
      const isOnTop = currPos.y === 0;

        if (isOnTop != shouldStyleOnScroll)
          setShouldStyleOnScroll(false);
      },
      [shouldStyleOnScroll],
      undefined,
      false,
      300,
  );

  return(
    <a href="#header" className={`${shouldStyleOnScroll ? '' : 'show'}`}>
      <BsFillArrowUpCircleFill />
    </a>
  )
}