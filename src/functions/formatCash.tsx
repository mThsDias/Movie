export const formatCash = (cash: number) => {
  try {
    const formattedCash = cash.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formattedCash;
  } catch (error) {
    console.error("Erro ao formatar o valor:", error);
    return "";
  }
};
