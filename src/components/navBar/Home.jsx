import GetImages from "../backendMappings/GetImages";
import HomeAboutCards from "../homeRelatedAbouts/HomeAboutCards";

export default function Home() {
    return (<>
        <div>
            <GetImages />
            <br />
            <br />
            <HomeAboutCards />
        </div>

    </>);
}
