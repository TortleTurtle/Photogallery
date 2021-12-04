import {Header} from "../components/header";
import {Banner} from "../components/banner";
import {Component} from "react";
import {Footer} from "../components/footer";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const page = this.props.data;
        return (
            <div className={'home'}>
                <Header/>
                <Banner images={page.bannerImages}/>
                <Footer/>
            </div>
        )
    }
}

export async function getStaticProps() {
    console.log(`fetching: ${process.env.API_URI}/home`);
    const res = await fetch(`${process.env.API_URI}/home`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}