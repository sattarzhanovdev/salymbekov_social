import React from 'react'
import c from './PostCard.module.scss'

const PostCard = ({item}) => {
  return (
    <div className={c.card}>
      <div className={c.nickname}>
        <img 
          src={item?.profile}
          alt="profile"
        />
        <li>
          {item?.name}
        </li>
      </div>

      <div className={c.post__image}>
        <img 
          src={item?.image}
          alt="image" 
        />
      </div>

      <div className={c.post__info}>
        <p>{item?.description}</p>
        <h5>Опубликовано {item?.date}</h5>
      </div>
    </div>
  )
}

export default PostCard