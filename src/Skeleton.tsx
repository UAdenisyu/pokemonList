import { CSSProperties } from "react";
import styles from "./Skeleton.module.css";

const Skeleton = ({ style }: { style: CSSProperties }) => {
    return <div className={styles.skeleton}></div>
}

export default Skeleton;