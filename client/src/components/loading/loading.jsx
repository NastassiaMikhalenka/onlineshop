import React from 'react';
import styles from './loading.module.css';

export const Preloader = () => {
    return (
        <div className={styles.loading}>
            <figure>
                <div></div><div></div>
                <div></div><div></div>
                <div></div><div></div>
                <div></div><div></div>
            </figure>
        </div>
    );
};