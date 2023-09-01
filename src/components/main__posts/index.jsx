import React from 'react'
import c from './mainPosts.module.scss'
import PostCard from './post__card'
import { API } from '../../api'

const MainPosts = () => {
  const [ active, setActive ] = React.useState('Все')
  const [ posts, setPosts ] = React.useState(null)

  React.useEffect(() => {
    API.getPosts()
      .then(res => {
        const result = Object.entries(res.data).map(([id, item]) => {
          return {
            id, 
            ...item
          }
        })
        setPosts(result.reverse());
      })
  }, [])

  return (
    <div className={c.mainPosts}>
      {/* <div className={c.categories}>
        <li
          className={active === 'Все' ? c.active : null}
          onClick={() => setActive('Все')}
        >
          Все
        </li>
        <li
          className={active === 'Подписки' ? c.active : null}
          onClick={() => setActive('Подписки')}
        >
          Подписки
        </li>
      </div> */}
      <div className={c.posts}>
        {
          !posts || posts?.length !== 0 ? 
          posts?.map((item, i) => (
            <PostCard 
              key={i}
              item={item}
            />
          )) :
          <h3>Пусто!</h3>
        }
      </div>
    </div>
  )
}

export default MainPosts