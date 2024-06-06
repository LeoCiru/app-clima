import { ReactNode } from "react"
import styles from "./Alert.module.css"

type AlertProps = {
    children: ReactNode
}

function Alert({children} : AlertProps) {
  return (
    <h3 className={styles.alertTitle}>
       {children} 
    </h3>
  )
}

export default Alert