import classes from '../modules/Hero.module.scss'
import Iphone from '../assets/Iphone Image.svg'
import Macbook from '../assets/mackbookpro-14.svg'
import playstation from '../assets/playStation.svg'
import headphones from '../assets/headphones.svg'
import applevisionpro from '../assets/apple-vision-pro.svg'
export const Hero = () => {
    return (
        <>
            <div className={classes["banner-wrapper"]}>
                <div className={classes['banner-context']}>
                    <div>
                        <h3>Pro.Beyond</h3>
                        <h1>IPhone 14 <span>Pro</span></h1>
                        <p>Created to change everything for the better.For everyone</p>
                    </div>
                    <div>
                        <button className={classes["shop-btn"]}>Shop Now</button>
                    </div>
                </div>
                <figure>
                    <img src={Iphone} alt="iphone-14-pro"/>
                </figure>

            </div>
            <div className={classes["hero-gadgets"]}>
                <div className={classes["column-gadgets"]}>
                    <div className={classes["playstation"]}>
                        <figure>
                            <img src={playstation} alt="playstation"/>
                        </figure>
                        <div className={classes["playstation-context"]}>
                            <h2>Playstation 5</h2>
                            <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
                                PlayStation experience.
                            </p>
                        </div>
                    </div>
                    <div className={classes["rower"]}>
                        <div className={classes["airpods"]}>
                            <figure>
                                <img src={headphones} alt="playstation"/>
                            </figure>
                            <div className={classes["airpods-context"]}>
                                <h2>Apple</h2>
                                <h2>AirPods</h2>
                                <span>Max</span>
                                <p>Computational audio. Listen, it's powerful</p>
                            </div>
                        </div>
                        <div className={classes["apple-vision"]}>
                            <figure>
                                <img src={applevisionpro} alt="applevisionpro"/>
                            </figure>
                            <div className={classes["apple-vision-context"]}>
                                <h2>Apple</h2>
                                <h2>Vision <span>Pro</span></h2>
                                <p>An immersive way to experience entertainment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes["macbook"]}>
                    <div className={classes["macbook-context"]}>
                        <h2>Macbook</h2>
                        <h1>Air</h1>
                        <p>The new 15‑inch MacBook Air makes room for more of what you love with a
                            spacious Liquid Retina display.</p>
                        <button className={classes["shop-btn"]}>Shop Now</button>
                    </div>
                    <figure>
                        <img src={Macbook} alt="macbook-14-pro"/>
                    </figure>
                </div>
            </div>
        </>
)
}