import React from "react";
import {Banner} from "../components/banner";
import {ImageText} from "../components/ImageText";
import {Header} from "../components/header";

export default class Galleries extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'galleries'}>
                <Header/>
                <Banner title={this.props.page.title} images={this.props.page.bannerImages} />
                <main>
                    {this.props.galleries.map((gallery, i) => {
                        return <ImageText
                            key={gallery.id}
                            image={gallery.photos[0]}
                            imagePosition={ i % 2 === 0 ? 0 : 1}
                            title={gallery.title} subtitle={gallery.photographer}
                            link={`/${gallery.slug}`}
                            text={gallery.description}
                            textPosition={ i % 2 === 0 ? 1 : 0} />
                        }
                    )}
                </main>
            </div>
        )
    }
}

export async function getStaticProps() {
    const res_page = await fetch(`${process.env.API_URI}/galleries-list`);
    const page = await res_page.json();

    const res_galleries = await fetch(`${process.env.API_URI}/galleries?_sort=published_at:desc`);
    const galleries = await res_galleries.json();

    return {
        props: {
            page,
            galleries
        }
    }
}