import React from 'react'

const Card = (props) => {
  
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if (props.item.location === "Online") {
    badgeText = "Online"
  }

  return (
    <section className='sec'>
      <div className="card">
      {badgeText && <div className='card-badge'>{badgeText}</div>}
        <img src={props.item.coverImg} alt="katie-img"className='card--image'/>
        <div className="card--stats">
          <img src="star.png" alt="star" width={15} />
          <span className='grey'>{props.item.stats.rating}</span>
          <span className='grey'>({props.item.stats.reviewCount}) • </span>
          <span className='grey'>{props.item.location}</span>
        </div>
        <p>{props.item.title}</p>
        <p><span className='bold'>From ${props.item.price} </span>/ person</p>
      </div>
    </section>
  )
}

export default Card
