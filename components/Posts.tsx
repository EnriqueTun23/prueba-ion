import  React, { useEffect } from 'react';

import { NextPage } from 'next';

import styles from '../styles/Post.module.scss';

import { Person } from '../interfaces/person.interface';
import Post from './Post';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getData, dataSelector } from '../store/data';



const Posts: NextPage = () => {

  const dispatch = useAppDispatch();
  const { data, info } = useAppSelector(dataSelector);
    
  useEffect(() => {
      fetchData();
  }, [])


  const fetchData = async () => {
    dispatch(getData(`https://rickandmortyapi.com/api/character`))
  }

  

  
  return (
    <div className={styles.posts_data}>
        <div className={styles.posts_data__titles}>
              <span className={styles.posts_data__titles__movs}>
                Tus movimiento
                </span>
              <span className={styles.posts_data__titles__all}>Ver todo</span>
        </div>
        {data.map((person: Person, index: number) => (
            <Post key={index} person={person} />
        ))}
          
          <div className={styles.posts_data__control}>
        <button className={styles.posts_data__control__btn} onClick={() => dispatch(getData(info.next))}>Mas</button>
           </div>  
    </div>
  )
}


export default Posts