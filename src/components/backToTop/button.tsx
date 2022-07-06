import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { Button } from './styles'


export function BackTotop() {
  const backToTop = document.querySelector('.back-to-top')
  function button() {
    if (window.scrollY >= 780){
      backToTop?.classList.add('show')
    } else {
      backToTop?.classList.remove('show')
    }
  }

  window.addEventListener('scroll', function(){
    button()
  })


  return(
    <Button href="#header" className='back-to-top'>
      <BsFillArrowUpCircleFill />
    </Button>
  )
}