import React from 'react'
import c from './PostCard.module.scss'
import dots from '../../../icons/dots.svg'
import { useAuth } from '../../../providers/useAuth'
import { API } from '../../../api'

const PostCard = ({item}) => {
  const [ active, setActive ] = React.useState(false)

  const { users } = useAuth()

  const deletePost = (id) => {
    API.deletePost(id)
      .then(() => window.location.reload())
  }

  return (
    <div className={c.card}>
      <div className={c.nickname}>
        <div className={c.left}>
          <img 
            src={item?.profile}
            alt="profile"
          />
          <li>
            {item?.name}
          </li>
        </div>
        {
          item?.userId === users?.id ?
          <div className={c.right}>
            <li onClick={() => setActive(!active)}>
              <img 
                src={dots}
                alt="menu"
              />
            </li>
            {
              active ?
              <div className={c.delete}>
                <li onClick={() => deletePost(item?.id)}>
                  Удалить
                </li>
              </div> :
              null
            }
          </div> :
          null
        }

        
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