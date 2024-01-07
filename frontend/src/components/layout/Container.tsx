import styles from './Container.module.css';

interface ContainerProps {
  children: any
}

function Container(props: ContainerProps) {
  return <main className={styles.container}>{ props.children }</main>;
}

export default Container;