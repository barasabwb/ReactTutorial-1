import React from "react"
import MyContainer from "./MyContainer";
import styles from "./ListItem.module.css"


class ListItem extends React.Component{


    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        const { completed, id, title } = this.props.todo
        return (
            <li className={styles.item}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => this.props.handleChangeProps(id)}
                />
                <button onClick={() => this.props.deleteTodoProp(id)}>Delete</button>
                <span style={completed ? completedStyle : null}>{title}</span>
            </li>

        )
    }


}

export default  ListItem