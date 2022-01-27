import React from "react";
import styles from "../styles/ImageText.module.css"
import Image from "next/image";
import Link from "next/link";

export class ImageText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {image, imagePosition , title, subtitle, text, link, textPosition, custom} = this.props

        let linkElement;
        if (link) {
            // eslint-disable-next-line react/no-unescaped-entities
            linkElement = <Link href={link} passHref><h4 className={styles.link}>See more >></h4></Link>
        }

        return (
            <section className={`${styles.imageText}`}>
                <div className={styles.column} style={{order:imagePosition}}>
                    <div className={styles.imgContainer}>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}${image.url}`}
                               layout={"fill"}
                               objectFit={"cover"}
                               objectPosition={"center"}
                               sizes={"50vw"}
                               alt={image.alternativeText}
                               priority
                        />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}${image.url}`}
                               width={image.width}
                               height={image.height}
                               layout={"responsive"}
                               sizes={"100vw"}
                               alt={image.alternativeText}
                               priority
                        />
                    </div>
                </div>
                <div className={styles.column} style={{order:textPosition}}>
                    <div className={styles.textContainer}>
                        <h2>{title}</h2>
                        <h3>{subtitle ? subtitle : ""}</h3>
                        <p>{text ? text : ""}</p>
                        {custom ? custom : null}
                        {linkElement ? linkElement : null}
                    </div>
                </div>
            </section>
        )
    }
}