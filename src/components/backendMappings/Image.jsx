
export default function Image(props) {

  return (
    <>
      <div key={props.id}>
        <img style={{ width: '100%', height: 'auto', maxHeight: '500px', minHeight: '300px' }}
          className="img-fluid" src={"data:image/jpeg;base64," + props.image}
          alt={props.name} />
      </div>
    </>
  );

}

