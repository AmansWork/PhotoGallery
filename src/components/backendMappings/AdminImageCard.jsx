import Card from 'react-bootstrap/Card';
export default function AdminImageCard(props) {

    return (<>

        <div key={props.id}>
            <Card style={{ width: '250px', height: '400px' }}>
                <p>Name: {props.name}</p>
                <p>Id: {props.id}</p>
                <img style={{ height: 'auto', maxHeight: '500px', minHeight: '300px' }}
                    className='img-fluid shadow-4' src={"data:image/jpeg;base64," + props.image}
                    alt={props.name} />
            </Card>
        </div>
        <br />

    </>);
}