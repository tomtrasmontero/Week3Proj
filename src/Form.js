import React, { Component } from 'react';
import axios from 'axios';
import {
    Form, Button, Stack,
} from 'react-bootstrap';

class SearchForm extends Component {
    state = {
        address: "",
        bal: 0,
        showResult: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const bal = await axios.get(`/api/getBalance/${this.state.address}`);
        this.setState({bal: bal.data, showResult: true});
    }

    handleChange = (e) => {
        this.setState({address: e.target.value});
    }
    render() {
        return(
            <Stack direction="horizontal" gap={3}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control
                        className="me-auto"
                        label="address"
                        placeholder="Enter Address here..."
                        onChange={this.handleChange}
                    />
                    <Button variant="primary" type="submit">Get Balance</Button>
                </Form>
                    { this.state.showResult &&
                    <div>
                        {`Current Balance: for ${this.state.address} : ${this.state.bal} ETH`}
                    </div>
                    }
            </Stack>
        )
    }
}

export default SearchForm;