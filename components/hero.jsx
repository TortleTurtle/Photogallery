import React from "react";
import styles from "../styles/Banner.module.css"
import Image from "next/image";

//This uses the styling of the banner!
export class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {image, title, subtitle} = this.props;

        return (
            <section className={styles.banner}>
                <div className={styles.title}>
                    <h1>{title}</h1>
                    <h3>{subtitle ? subtitle : ""}</h3>
                </div>
                <div className={styles.imgContainer}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_URI}${image.url}`}
                           layout={"fill"}
                           objectFit={"cover"}
                           objectPosition={"center"}
                           sizes={"100vw"}
                           alt={image.alternativeText}
                           priority
                    />
                </div>
                <div className={styles.imgContainer}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_URI}${image.url}`}
                           width={image.width}
                           height={image.height}
                           layout={"responsive"}
                           sizes={"100vw"}
                           alt={image.alternativeText}
                           priority
                    />
                </div>
            </section>
        )
    }
}