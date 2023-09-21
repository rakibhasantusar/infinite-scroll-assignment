import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Form, FormControl } from 'react-bootstrap';


const SearchForm = ({ handleSearchChange }) => {

    return (
        <div className='d-flex justify-content-center'>
            <div className='gap-3 mx-auto my-5 d-flex  flex-column  w-50'>
                <Form className='w-100' style={{ forcedColorAdjust: '#007bff' }}>
                    <FormControl
                        type="text"
                        placeholder="Type Beer Name Here"
                        name='search'
                        className="mr-sm-2 fw-semibold"
                        style={{
                            height: '50px',
                            borderColor: '#198754',
                            borderWidth: '1px',
                            forcedColorAdjust: '#007bff',
                            backgroundColor: '#f2f2f2'
                        }}
                        onChange={handleSearchChange}
                    />
                </Form>
            </div>
        </div>
    );
};

export default SearchForm;
