import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link"

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
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <h3> Lorem Ipsum</h3>
                </div>
                <nav className={`${styles.nav} ${this.state.toggle ? styles["nav--toggled"] : ""}`}>
                    <ul>
                        <li>
                            <Link href={"/"}>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/galleries"}>
                                <a>Galleries</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/contact"}>
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={`${styles.burger} ${this.state.toggle ? styles["burger--toggled"] : ""}`} onClick={() => this.toggle()}>
                    <div className={`${styles.line} ${this.state.toggle ? styles["line--toggled"] : ""}`}/>
                    <div className={`${styles.line} ${this.state.toggle ? styles["line--toggled"] : ""}`}/>
                    <div className={`${styles.line} ${this.state.toggle ? styles["line--toggled"] : ""}`}/>
                </div>
            </header>
        )
    }
}