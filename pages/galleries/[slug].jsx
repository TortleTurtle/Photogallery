import React from "react";
import Link from "next/link";
import styles from "../../styles/Gallery.module.css";
import {Header} from "../../components/header";
import {Hero} from "../../components/hero";
import {GalleryPhotos} from "../../components/galleryPhotos";
import {Footer} from "../../components/footer";

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { title, description, photos, photographer, hero} = this.props.gallery;

        return (
            <div className={styles.gallery}>
                <Header/>
                <main>
                    <Hero title={title} image={hero} subtitle={photographer}/>
                    <GalleryPhotos photos={photos}/>
                </main>
                <Footer/>
            </div>
        )
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_URI}/galleries`)
    const galleries = await res.json();

    const paths = galleries.map((gallery) => ({
        params: { slug: gallery.slug },
    }));

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const { slug } = params;

    const res = await fetch(`${process.env.API_URI}/galleries?slug=${slug}`);
    const data = await res.json();
    const gallery = data[0];

    return {
        props: { gallery }
    }
}