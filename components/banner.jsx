import React from "react";
import styles from "../styles/Banner.module.css"
import Image from "next/image";

export class Banner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {images, title, subtitle} = this.props
        return (
            <section className={`${styles.banner}`}>
                <div className={styles.title}>
                    <h1>{title}</h1>
                    <h3>{subtitle ? subtitle : ""}</h3>
                </div>
                <div className={styles.column}>
                    <div className={styles.imgContainer}>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URI}${images[0].url}`}
                               layout={"fill"}
                               objectFit={"cover"}
                               objectPosition={"center"}
                               sizes={"50vw"}
                               alt={images[0].alternativeText}
                               priority
                        />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URI}${images[0].url}`}
                               width={images[0].width}
                               height={images[0].height}
                               layout={"responsive"}
                               sizes={"100vw"}
                               alt={images[0].alternativeText}
                               priority
                        />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.imgContainer}>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URI}${images[1].url}`}
                               layout={"fill"}
                               objectFit={"cover"}
                               objectPosition={"center"}
                               sizes={"50vw"}
                               alt={images[1].alternativeText}
                               priority
                        />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URI}${images[1].url}`}
                               width={images[1].width}
                               height={images[1].height}
                               layout={"responsive"}
                               sizes={"100vw"}
                               alt={images[0].alternativeText}
                               priority
                        />
                    </div>
                </div>
            </section>
        )
    }
}