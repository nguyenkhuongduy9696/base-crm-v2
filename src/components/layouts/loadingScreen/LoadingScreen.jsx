import React from 'react';
import styles from './styles.module.scss';

const LoadingScreen = () => {
  return(
    <>
      <div className={styles.container}>
        <div className={styles.loaderContainer}>
          <div className={styles.loader}>
            <div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
        <p className={ `text-3xl pl-2 ${styles.title}` }>
          <span className='text-primary font-bold'>Next</span><span>CRM</span>
        </p>
      </div>
    </>
  );
};

export default LoadingScreen;