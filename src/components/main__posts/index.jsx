import React from 'react'
import c from './mainPosts.module.scss'
import PostCard from './post__card'

const MainPosts = () => {
  const [ active, setActive ] = React.useState('Все')

  return (
    <div className={c.mainPosts}>
      <div className={c.categories}>
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
      </div>
      <div className={c.posts}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}

export default MainPosts