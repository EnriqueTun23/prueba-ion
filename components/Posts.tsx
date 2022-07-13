import  React, { useCallback, useEffect, useState } from 'react';

import { NextPage } from 'next';

import styles from '../styles/Post.module.scss';

import { Person } from '../interfaces/person.interface';
import Post from './Post';



const Posts: NextPage = () => {

    const [page, setPage] = useState<number>(1)
    const [datos, setDatos] = useState<Person[]>([])
    
  useEffect(() => {
      fetchData();
  }, [])


  const fetchData = async () => {
    try {
        const res = fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        res.then((response) => response.json())
            .then((data) => {
                if (data.info.next) {
                    setPage(page + 1)
                    const d =  data.results
                    setDatos([...datos, ...d])
                }
            })
    } catch (err) {
        console.error(err)
    }
  }


  
  return (
    <div className={styles.posts_data}>
        <div className={styles.posts_data__titles}>
              <span className={styles.posts_data__titles__movs}>
                Tus movimiento
                </span>
              <span className={styles.posts_data__titles__all}>Ver todo</span>
        </div>
        {datos.map((person: Person, index: number) => (
            <Post key={index} person={person} />
        ))}
          
          <div className={styles.posts_data__control}>
            <button  className={styles.posts_data__control__btn}onClick={fetchData}>Mas</button>
           </div>  
    </div>
  )
}


export default Posts