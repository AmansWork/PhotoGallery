import CustomerForm from "../backendMappings/CustomerForm";
export default function Contact() {
    return (<>
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor:"white"}}>
            <h1 style={{textAlign:"center"}}>Contact Us</h1>
            <div>
                <CustomerForm />
            </div>
        </div>

    </>);
}

