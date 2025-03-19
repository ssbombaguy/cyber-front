
import '../reset.scss'
import {Header} from "../components/Header.jsx";
import {Hero} from "../components/Hero.jsx";
import {Categories} from "../components/Categories.jsx";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Categories></Categories>
        </div>
    );
};

export default Home
