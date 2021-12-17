import React, {Component} from "react";
import {Header} from "../components/header";
import {Banner} from "../components/banner";
import {Footer} from "../components/footer";
import {ImageText} from "../components/ImageText";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title, subtitle, about, images} = this.props.page;
        return (
            <div className={'home'}>
                <Header/>
                <main>
                    <Banner images={[images[0], images[1]]} title={title} subtitle={subtitle}/>
                    <ImageText image={images[2]} imagePosition={1} title={"About"} text={about} textPosition={0}/>
                    <ImageText image={images[3]} imagePosition={0} title={"Contact"} text={"Contact informatie"} textPosition={1}/>
                </main>
                <Footer email={this.props.contact.email} phone={this.props.contact.phoneNumber}/>
            </div>
        )
    }
}
export async function getStaticProps() {
    const res_page = await fetch(`${process.env.API_URI}/home`);
    const page = await res_page.json();

    const res_contact = await fetch(`${process.env.API_URI}/contact`);
    const contact = await res_contact.json();

    console.log(contact);

    return {
        props: {page, contact}
    }
}