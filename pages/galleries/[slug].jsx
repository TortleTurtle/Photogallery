import React from "react";
import styles from "../../styles/Gallery.module.css";
import {Header} from "../../components/header";
import {Hero} from "../../components/hero";
import {GalleryPhotos} from "../../components/galleryPhotos";
import {Footer} from "../../components/footer";
import Head from "next/head";

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { title, description, photos, photographer, hero, slug} = this.props.gallery;

        return (
            <div className={styles.gallery}>
                <Head>
                    {/*Indexing*/}
                    <meta name="robots" content="index"/>
                    {/*SEO*/}
                    <meta name="description" content={description}/>
                    {/*OGP*/}
                    <meta property="og:title" content={title}/>
                    <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}${hero.formats.large ? hero.formats.large.url : hero.url}`}/>
                    <meta property="og:description" content={description}/>
                    <meta property='og:url' content={`${process.env.NEXT_PUBLIC_URL}/galleries/${slug}`}/>
                    <meta property="og:type" content="--Website"/>
                    <meta property="og:site_name" content=""/>

                    <title>{title}</title>
                </Head>
                <Header/>
                <main>
                    <Hero title={title} image={hero} subtitle={photographer}/>
                    <GalleryPhotos photos={photos}/>
                </main>
                <Footer email={this.props.contact.email} phone={this.props.contact.phoneNumber}/>
            </div>
        )
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.STRAPI_URL}/galleries`)
    const galleries = await res.json();

    const paths = galleries.map((gallery) => ({
        params: { slug: gallery.slug },
    }));

    return {
        paths,
        fallback: "blocking",
    }
}

export async function getStaticProps({params}) {
    const { slug } = params;

    const res = await fetch(`${process.env.STRAPI_URL}/galleries?slug=${slug}`);
    const data = await res.json();
    const gallery = data[0];

    const res_contact = await fetch(`${process.env.STRAPI_URL}/contact`);
    const contact = await res_contact.json()

    return {
        props: { gallery, contact},
        //revalidate: 24*60*60, //revalidate at most once per day.
    }
}