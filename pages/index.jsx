import React, {Component} from "react";
import Head from "next/head"
import {Header} from "../components/header";
import {Banner} from "../components/banner";
import {Footer} from "../components/footer";
import {ImageText} from "../components/ImageText";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "../styles/Footer.module.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    contact = <ul>
        <a href={`mailto:${this.props.contact.email}`}>
            <li>
                <FontAwesomeIcon className={styles.listIcon} icon={['fas', 'envelope']} fixedWidth/>
                {this.props.contact.email}
            </li>
        </a>
        <a href={`tel:${this.props.contact.phoneNumber}`}>
            <li>
                <FontAwesomeIcon className={styles.listIcon} icon={['fas', 'mobile-alt']} fixedWidth/>
                {this.props.contact.phoneNumber}
            </li>
        </a>
    </ul>;

    render() {
        const {title, subtitle, about, images} = this.props.page;
        return (
            <div className={'home'}>
                <Head>
                    {/*Indexing*/}
                    <meta name="robots" content="index"/>
                    {/*SEO*/}
                    <meta name="description" content={about}/>
                    {/*OGP*/}
                    <meta property="og:title" content={title}/>
                    <meta property="og:image" content={`${process.env.NEXT_PUBLIC_STRAPI_URL}${images[0].formats.large ? images[0].formats.large.url : images[0].url}`}/>
                    <meta property="og:description" content={about}/>
                    <meta property='og:url' content={`${process.env.NEXT_PUBLIC_DOMAIN}`}/>
                    <meta property="og:type" content="--Website"/>
                    <meta property="og:site_name" content=""/>

                    <title>{title}</title>
                </Head>
                <Header/>
                <main>
                    <Banner images={[images[0], images[1]]} title={title} subtitle={subtitle}/>
                    <ImageText image={images[2]} imagePosition={1} title={"About"} text={about} textPosition={0}/>
                    <ImageText image={images[3]} imagePosition={0} title={"Contact"} custom={this.contact}
                               textPosition={1}/>
                </main>
                <Footer email={this.props.contact.email} phone={this.props.contact.phoneNumber}/>
            </div>
        )
    }
}

export async function getStaticProps() {
    const res_page = await fetch(`${process.env.STRAPI_URL}/home`);
    const page = await res_page.json();

    const res_contact = await fetch(`${process.env.STRAPI_URL}/contact`);
    const contact = await res_contact.json();

    return {
        props: {page, contact},
        revalidate: 24*60*60, //revalidate at most once per day.
    }
}