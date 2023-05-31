import { StarsContainer } from "./index"
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ stars, reviews }) => {

  
  const tempStars = Array.from({ length: 5 }).map((_, index) => {

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
 

  return (
    <StarsContainer>
      <div className="stars">
        {tempStars}
      </div>
      <div className="reviews">
        ({reviews} customer reviews)
      </div>
    </StarsContainer>
  )
}
export default Stars