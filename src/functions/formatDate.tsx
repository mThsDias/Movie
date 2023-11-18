import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (dateString: string) => {
  try {
    const parsedDate = parseISO(dateString);
    const formattedDate = format(parsedDate, "d 'de' MMM 'de' yyyy", {
      locale: ptBR,
    });
    return formattedDate;
  } catch (error) {
    console.error("Erro ao formatar a data:", error);
    return "";
  }
};
