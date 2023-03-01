import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      {/* if we use 'a' tag as below, the page refreshes to load the about apge, so we use the Link tag insted
        
        <a href='/about'>
        <FaQuestion size={30} />
        </a> 

      */}
        <Link to='/about'>
            <FaQuestion size={30} />
        </Link>
    </div>
  )
}

export default AboutIconLink
