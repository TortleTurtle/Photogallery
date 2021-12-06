import React from "react";
import styles from "../styles/ImageText.module.css"
import Image from "next/image";

export class ImageText extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        const {image, imagePosition , title, text, textPosition} = this.props
        return (
            <section className={`${styles.imageText}`}>
                <div className={styles.column} style={{order:imagePosition}}>
                    <div className={styles.imgContainer}>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URI}${image.url}`}
                               layout={"fill"}
                               objectFit={"cover"}
                               objectPosition={"center"}
                               sizes={"50vw"}
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
                </div>
                <div className={styles.column} style={{order:textPosition}}>
                    <div className={styles.textContainer}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </section>
        )
    }
}