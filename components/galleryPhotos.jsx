import React from "react";
import Image from "next/image";
import styles from "../styles/GalleryPhotos.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class GalleryPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sliderIndex: 0, sliderActive: false}
    }

    prevSlide = () => {
        let newIndex;
        if (this.state.sliderIndex === 0) {
            newIndex = this.props.photos.length - 1;
        } else {
            newIndex = this.state.sliderIndex - 1;
        }
        this.setState({sliderIndex: newIndex});
    }
    nextSlide = () => {
        let newIndex;
        if (this.state.sliderIndex === this.props.photos.length - 1) {
            newIndex = 0;
        } else {
            newIndex = this.state.sliderIndex + 1;
        }
        this.setState({sliderIndex: newIndex});
    }
    
    render() {
        return (
            <div>
                <section className={styles.galleryPhotos}>
                    {this.props.photos.map(
                        (photo, index) => {
                            return (
                                <div key={index} className={styles.imgContainer} onClick={() => {
                                    this.setState({sliderActive: true, sliderIndex: index});
                                }}>
                                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.url}`}
                                           objectFit={"cover"}
                                           objectPosition={"center"}
                                           layout={"fill"}
                                           alt={photo.alternativeText}
                                           sizes={"33vw"}
                                    />
                                </div>
                            )
                        }
                    )}
                </section>
                {/*TODO: Add butons */}
                <section className={`${styles.slides} ${this.state.sliderActive ? styles["slides--active"] : ""}`}>
                    <div className={`${styles.slidesButton} ${styles.prev}`} onClick={this.prevSlide}>
                        <FontAwesomeIcon icon={["fas", "angle-left"]}/>
                    </div>
                    <div className={`${styles.slidesButton} ${styles.next}`} onClick={this.nextSlide}>
                        <FontAwesomeIcon icon={["fas", "angle-right"]}/>
                    </div>
                    <div className={`${styles.slidesButton} ${styles.close}`} onClick={ () => this.setState({sliderActive: false})}>
                        <FontAwesomeIcon icon={["fa", "times"]}/>
                    </div>
                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${this.props.photos[this.state.sliderIndex].url}`}
                           layout={"fill"}
                           objectFit={"contain"}
                           objectPosition={"center"}
                           alt={this.props.photos[this.state.sliderIndex].alternativeText}
                    />
                </section>
            </div>
        )
    }
}