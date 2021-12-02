import React from "react";
import styles from "../styles/Header.module.css";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }

    toggle() {
        this.setState({
            toggle: !this.state.toggle
        });
        //TODO: Add burger animation
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <h3>Lorem Ipsum</h3>
                </div>
                <nav className={`${styles.nav} ${this.state.toggle ? styles.navToggled : ""}`}>
                    <a href={""}>Home</a>
                    <a href={""}>Galleries</a>
                    <a href={""}>Contact</a>
                </nav>
                <div className={styles.burger} onClick={() => this.toggle()}>
                    <div className={styles.line}/>
                    <div className={styles.line}/>
                    <div className={styles.line}/>
                </div>
            </header>
        )
    }
}