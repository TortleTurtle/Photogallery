import React from "react";
import styles from "../styles/Footer.module.css"

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className={styles.footer}>
                <div>
                    <h2>Footer</h2>
                </div>
                <div>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus placerat dui, non volutpat lorem aliquam quis. Nam dignissim quam quis sodales posuere. Sed laoreet risus id urna fermentum tristique.</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Email:</li>
                        <li>Mobile:</li>
                    </ul>
                </div>
                <div>
                    <h3>Site</h3>
                    <p>Made by Cheftags</p>
                </div>
                {/*TODO: Futher style socials*/}
                <div className={styles.socials}>
                    <h3>Socials</h3>
                </div>
            </footer>
        )
    }
}