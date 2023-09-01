import React from 'react'
import c from './PostCard.module.scss'

const PostCard = () => {
  return (
    <div className={c.card}>
      <div className={c.nickname}>
        <img 
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
          alt="profile"
        />
        <li>
          sattarzhanovdev
        </li>
      </div>

      <div className={c.post__image}>
        <img 
          src="https://achishayari.com/wp-content/uploads/2023/04/Cute-DP-Image.webp" 
          alt="image" 
        />
      </div>

      <div className={c.post__info}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
        <h5>Опубликовано 01.01.01</h5>
      </div>
    </div>
  )
}

export default PostCard