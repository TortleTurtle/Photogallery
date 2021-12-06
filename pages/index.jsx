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
        const {title, subtitle, about, images} = this.props.data;
        return (
            <div className={'home'}>
                <Header/>
                <Banner images={[images[0], images[1]]} title={title} subtitle={subtitle}/>
                <main>
                    <ImageText image={images[2]} imagePosition={1} title={"About"} text={about} textPosition={0}/>
                    <ImageText image={images[3]} imagePosition={0} title={"Contact"} text={"Contact informatie"} textPosition={1}/>
                </main>
                <Footer/>
            </div>
        )
    }
}
export async function getStaticProps() {
    console.log(`fetching: ${process.env.API_URI}/home`);
    const res = await fetch(`${process.env.API_URI}/home`);
    const data = await res.json();
    console.log(data);

    return {
        props: {
            data
        }
    }
}