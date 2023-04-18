import Card from 'react-bootstrap/Card';
export default function ImageCard(props) {

    return (<>

        <div key={props.id}>
            <Card>

                <img style={{ height: 'auto', maxHeight: '500px', minHeight: '300px' }}
                    className='img-fluid shadow-4' src={"data:image/jpeg;base64," + props.image}
                    alt={props.name} />

            </Card>
        </div>

    </>);
}