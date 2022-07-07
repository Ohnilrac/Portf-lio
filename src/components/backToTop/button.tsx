import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import './styles.css'

export function BackTotop() {
  const backToTop = document.querySelector('.back-to-top')
  function button() {
    if (window.scrollY >= 100){
      backToTop.classList.add('show')
    } else {
      backToTop.classList.remove('show')
    }
  }

  window.addEventListener('scroll', function(){
    button()
  })

  return(
    <a href="#header" className='back-to-top'>
      <BsFillArrowUpCircleFill />
    </a>
  )
}