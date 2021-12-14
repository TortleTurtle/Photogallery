import React from "react";
import Image from "next/image";
import styles from "../styles/GalleryPhotos.module.css";

export class GalleryPhotos extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {sliderIndex: 0, sliderActive: false}
    }

    setSliderIndex = (i) => {
        this.setState({sliderIndex: i});
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
                                    <Image src={`${process.env.NEXT_PUBLIC_API_URI}${photo.url}`}
                                           width={photo.width}
                                           height={photo.height}
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
                    <Image src={`${process.env.NEXT_PUBLIC_API_URI}${this.props.photos[this.state.sliderIndex].url}`}
                           width={this.props.photos[this.state.sliderIndex].width}
                           height={this.props.photos[this.state.sliderIndex].height}
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