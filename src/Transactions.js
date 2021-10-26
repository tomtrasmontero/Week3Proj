import React, { Component } from 'react';
import axios from 'axios';
import {
    Stack,
} from 'react-bootstrap';

class Transactions extends Component {
    state = {
        transactions: {},
        transactionHashArr: []
    }

    componentDidMount() {
        this.fetchTransactionData();
    }

    fetchTransactionData = async () => {
        const response = await axios.get("/api/getBlock");
        this.setState({ transactions: response.data,
            transactionHashArr: response.data.transactions })
    }

    render() {
        const recentTransaction = this.state.transactionHashArr.map((transaction, idx) => (
            <div
                className="bg-light-gray border"
                key={`transaction${idx}`}
                >{transaction}
            </div>
        ))
        return(
            <Stack className="col-md-5 mx-auto" gap={3}>
                { recentTransaction }
            </Stack>
        )
    }
}

export default Transactions;