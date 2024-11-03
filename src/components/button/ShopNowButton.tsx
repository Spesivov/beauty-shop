import { Link } from 'react-router-dom'

const ShopNowButton: React.FC = () => {
    return (
      <Link to='/store' className='btn hero-btn'>
        shop now
      </Link>
    )
  }

export default ShopNowButton