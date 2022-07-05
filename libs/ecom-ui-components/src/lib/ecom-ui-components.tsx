import styles from './ecom-ui-components.module.scss';

/* eslint-disable-next-line */
export interface EcomUiComponentsProps {}

export function EcomUiComponents(props: EcomUiComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to EcomUiComponents!</h1>
    </div>
  );
}

export default EcomUiComponents;
