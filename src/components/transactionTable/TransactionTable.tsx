import React, { useEffect } from 'react'
import "./transactionTable.scss";

import api from "../../services/api";

const TransactionTable = () => {

    useEffect(() => {
        api.get("/transactions")
        .then(response => console.log(response.data));
    }, [])

    return (
        <div className="transactions">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Website development</td>
                        <td className="income">R$ 12.000,00</td>
                        <td>Sell</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td>Hamburger</td>
                        <td className="outcome">- R$ 59,00</td>
                        <td>Food</td>
                        <td>10/04/2021</td>
                    </tr>
                    <tr>
                        <td>Flat rent</td>
                        <td className="outcome">- R$ 1.200,00</td>
                        <td>House</td>
                        <td>23/03/2021</td>
                    </tr>
                    <tr>
                        <td>Notebook</td>
                        <td className="income">R$ 5.400,00</td>
                        <td>Sell</td>
                        <td>15/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable;
