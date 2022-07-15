import React from 'react'

import PropTypes, { InferProps } from 'prop-types';

import { NextPage } from 'next';

import Image from 'next/image'
import Router from 'next/router';

import styles from '../styles/Post.module.scss';
import { Person } from '../interfaces/person.interface';
import { useAppDispatch } from '../store/hooks';
import { getDataInfo } from '../store/data/actions';

interface data {
    person: Person;
}

const Post: NextPage = ( { person }: data ) => {
    const dispatch = useAppDispatch();
    const redirectData = () => {
        dispatch(getDataInfo(person.id))
        Router.push(`/post/${person.id}`)
    }
    return (
      <div onClick={() => redirectData()} className={styles.container}>
          <div className={styles.container__list}>
              <Image
                  src={person.image}
                  alt="Picture of the author"
                  width="44px"
                  height="31px"
              />
              <div className={styles.container__list__name}>
                  <span className={styles.container__list__name__name}>
                      {person.name}
                  </span>
                  <span className={styles.container__list__name__species}>
                      {person.species}
                  </span>
              </div>
          </div>
          <div className={styles.container__detail}>
              <span className={styles.container__detail__id}>
                  {person.id}
              </span>
              <span className={styles.container__detail__status}>
                  {person.status}
              </span>
          </div>
      </div>
  )
}

export default Post;
