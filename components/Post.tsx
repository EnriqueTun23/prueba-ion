import React from 'react'

import PropTypes, { InferProps } from 'prop-types';

import { NextPage } from 'next';

import Image from 'next/image'

import styles from '../styles/Post.module.scss';

const Post: NextPage = ( { person }: any ) => {
  return (
      <div className={styles.container}>
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
