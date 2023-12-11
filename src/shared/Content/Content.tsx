import React from 'react';
import styles from './content.css';
import * as domain from "domain";

interface IContentProps {
  children?: React.ReactNode;
}

export function Content({children}: IContentProps) {
  return (
      <main className={styles.content}>
        {children}
      </main>
  );
}
