import moment from "moment";
moment.locale("pt-br");

export const formatMoney = (formattedMoney: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(formattedMoney);

export const formatDate = (formattedDate: string) => moment(formattedDate, "DD/MM/YYYY").format("DD/MM/YYYY");
