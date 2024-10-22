import { ReactNode } from "react";
import styles from "./List.module.css"

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode
}

export function List<T>(props: ListProps<T>) {
    return (
        <div className={styles.list}>
            {props.items.map(props.renderItem)}
        </div>
    )
}