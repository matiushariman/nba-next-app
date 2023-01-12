import styles from './ScoresFeature.module.css';

/* eslint-disable-next-line */
export interface ScoresFeatureProps {}

export function ScoresFeature(props: ScoresFeatureProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ScoresFeature!</h1>
    </div>
  );
}

export default ScoresFeature;
