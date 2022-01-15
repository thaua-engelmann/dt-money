import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
        transactions: [
            {
                id: 1,
                name: "Test 1",
                type: "income-type",
                category: "testing",
                amount: 5000,
                createdAt: new Date()
            },
            {
                id: 2,
                name: "Test 2",
                type: "outcome-type",
                category: "testing",
                amount: 5000,
                createdAt: new Date()
            },
        ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all('transaction');
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
