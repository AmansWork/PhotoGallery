export default function AdminImageCard(props) {
    
    return (<>

        <div key={props.id}>
            <div class="card" style={{ width: "18rem" }}>
                <img style={{ height:'300px'}}
                    className='img-fluid shadow-4' src={"data:image/jpeg;base64," + props.image}
                    alt={props.name} />
                <div class="card-body">
                    <p class="card-text">{props.id} {props.name}</p>
                </div>
            </div>
        </div>
        <br />

    </>);
}