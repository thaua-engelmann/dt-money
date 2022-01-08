import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer } from "miragejs";

createServer({
    routes() {
        this.namespace = "api";

        this.get("/transactions", () => {
            return [
                {
                    id: 1,
                    title: "something"
                }
            ]
        });

        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return data;
        })
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
