import photoCreditIcon from "../src/assets/img/photoCreditIcon.svg";
import githubIcon from "../src/assets/img/githubIcon.svg";
import fakeStoreIcon from "../src/assets/img/fakeStoreIcon.png"

function About() {
    return (
        <div className="about">
            <div className="photo-credit">
                <img src={photoCreditIcon} alt="picture-icon" />
                <p>Background picture from <a href="https://unsplash.com/it/@mohamadaz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mohammad Alizade</a> on <a href="https://unsplash.com/it/foto/unimmagine-sfocata-di-uno-sfondo-blu-e-rosa-XgeZu2jBaVI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </p>
            </div>
            <div className="store-credit">
                <img src={fakeStoreIcon} alt="fake-store-api-logo" />
                <a target="_blank" href="https://fakestoreapi.com/">Fake Store API</a>
            </div>

        </div>
    )


}
export default About
