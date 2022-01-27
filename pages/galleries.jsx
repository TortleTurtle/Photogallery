import React from "react";
import {Banner} from "../components/banner";
import {ImageText} from "../components/ImageText";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import Head from "next/head";

export default class Galleries extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, description, bannerImages} = this.props.page;

        return (
            <div className={'galleries'}>
                <Head>
                    {/*Indexing*/}
                    <meta name="robots" content="index"/>
                    {/*SEO*/}
                    <meta name="description" content={description}/>
                    {/*OGP*/}
                    <meta property="og:title" content={title}/>
                    <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_IMG_URL}${bannerImages[0].formats.large ? bannerImages[0].formats.large.url : bannerImages[0].url}`}/>
                    <meta property="og:description" content={description}/>
                    <meta property='og:url' content={`${process.env.NEXT_PUBLIC_URL}/galleries`}/>
                    <meta property="og:type" content="--Website"/>
                    <meta property="og:site_name" content=""/>

                    <title>{title}</title>
                </Head>
                <Header/>
                <main>
                    <Banner title={title} images={bannerImages} />
                        {this.props.galleries.map((gallery, i) => {
                            return <ImageText
                                key={gallery.id}
                                image={gallery.photos[0]}
                                imagePosition={ i % 2 === 0 ? 0 : 1}
                                title={gallery.title} subtitle={gallery.photographer}
                                link={`/galleries/${gallery.slug}`}
                                text={gallery.description}
                                textPosition={ i % 2 === 0 ? 1 : 0} />
                        }
                    )}
                </main>
                <Footer email={this.props.contact.email} phone={this.props.contact.phoneNumber}/>
            </div>
        )
    }
}

export async function getStaticProps() {
    const res_page = await fetch(`${process.env.STRAPI_URL}/galleries-list`);
    const page = await res_page.json();

    const res_galleries = await fetch(`${process.env.STRAPI_URL}/galleries?_sort=published_at:desc`);
    const galleries = await res_galleries.json();

    const res_contact = await fetch(`${process.env.STRAPI_URL}/contact`);
    const contact = await res_contact.json()

    return {
        props: {page, galleries, contact},
        revalidate: 24*60*60, //revalidate at most once per day.
    }
}