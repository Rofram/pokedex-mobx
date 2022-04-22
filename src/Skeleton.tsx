import styles from './Skeleton.module.scss'

type SkeletonProps = {
  style: React.CSSProperties
}

export const Skeleton = ({ style }: SkeletonProps) => {
  return <div className={styles['skeleton']} style={style} />
}