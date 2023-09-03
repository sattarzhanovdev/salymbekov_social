import React from 'react'
import c from './profile.module.scss'
import { useAuth } from '../../providers/useAuth'
import { API } from '../../api'
import PostCard from '../../components/main__posts/post__card'

const Profile = () => {
  const { users } = useAuth()
  const [ posts, setPosts ] = React.useState(null)

  React.useEffect(() => {
    API.getPosts()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              id,
              ...item
            }
          })
        setPosts(result.reverse())
        
      })
    }, [])
    
  const end = posts?.filter(item => item.userId === users?.id)
  return (
    <div className={c.profile}>
      <div className={c.info}>
        <div className={c.image}>
          <img 
            src={users?.photo} 
            alt={users?.name}
          />
        </div>
        <h3>{users?.name}</h3>
      </div>
      
      <div className={c.posts}>
        <h3>Публикации</h3>
        <div className={c.cards}>
          {
            !end || end?.length !== 0 ?
            posts?.map((item, i) => (
              <PostCard 
                key={i}
                item={item}
              />
            )) :
            <h3>Ничего нет!</h3>
          }
        </div>
      </div>
    </div>
  )
}

export default Profile