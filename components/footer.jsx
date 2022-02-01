import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                        <a href={`mailto:${this.props.email}`}>
                            <li>
                                <FontAwesomeIcon className={styles.listIcon} icon={['fas', 'envelope']} fixedWidth/>
                                {this.props.email}
                            </li>
                        </a>
                        <a href={`tel:${this.props.phone}`}>
                            <li>
                                <FontAwesomeIcon className={styles.listIcon} icon={['fas', 'mobile-alt']} fixedWidth/>
                                {this.props.phone}
                            </li>
                        </a>
                    </ul>
                </div>
                <div>
                    <h3>Site</h3>
                    <p>Made by Cheftags</p>
                </div>
                <div className={styles.socials}>
                    <div className={styles.seperator}/>
                    <div className={styles.socialsIcons}>
                        <a href={"https://facebook.com"} target="_blank" rel="noreferrer">
                            <Image src={"/images/facebook.svg"}
                                   width={80}
                                   height={80}
                                   alt={"facebook icon"}
                            />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <Image src={"/images/instagram.svg"}
                                   width={80}
                                   height={80}
                                   alt={"instagram icon"}
                            />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}