import React from 'react'
import c from './publish.module.scss'
import { useNavigate } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../App';
import { API } from '../../api';
import { useAuth } from '../../providers/useAuth';

const Publish = () => {
  const [ file, setFile ] = React.useState(null)
  const [ description, setDescription ] = React.useState('')
  const [ active, setActive ] = React.useState(false)

  const { users, loading } = useAuth()

  const navigate = useNavigate()

  const postPost = () => {	
    const date = new Date()

    const storageRef = ref(storage, `${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed",
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setActive(true)
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          API.postPost(
            {
              userId: users.id,
              name: users.name,
              profile: users.photo,
              description: description,
              image: downloadURL,
              date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
            }
          ).then(() => {
            setActive(false)
            navigate('/')
          })

        });
    })
  }

  return (
    <div className={c.publish}>
      <div className={c.choose__photo}>
        <input 
          type="file"
          onChange={e => setFile(e.target.files[0])}
          id={'choose'}
        />
        <button 
          className={ 
            !file ?
            null :
            c.active 
          }
        >
          <label htmlFor={'choose'}>
            { 
              !file ? 
              'Выберите фото или видео' :
              'Выбрано!'
            }
          </label>
        </button>
      </div>
      <div className={c.description}>
        <textarea 
          placeholder='Ваш текст'
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <button 
        onClick={e => {
          e.preventDefault()
          postPost()
        }}
      >
        Опубликовать
      </button>

      {
        active ? 
        <div className={c.loader}>
          <img src="https://www.wpfaster.org/wp-content/uploads/2013/06/circle-loading-gif.gif" alt="loading" />
          <p>Ваша публикация публикуется, ожидайте)</p>
        </div> :
        null
      }
    </div>
  )
}

export default Publish