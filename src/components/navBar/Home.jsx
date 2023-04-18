import GetImages from "../backendMappings/GetImages";
import HomeAboutCards from "../homeRelatedAbouts/HomeAboutCards";

export default function Home() {
    return (<>

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>      
        </div>
        <div>
            <GetImages />
            <br />
            <br />
            <HomeAboutCards />
        </div>

    </>);
}
