/* Função para formatar number'Moeda' para padrão Brasil */
const formatDate = (date: string): string => {
  let dateFormatted = new Date(date); //  converte string para tipo data
  
  let day = dateFormatted.getDate() > 9 ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`; // colocando um 0 onde os dias são menores que 09.
  
  let month = (dateFormatted.getMonth() + 1) > 9 ? (dateFormatted.getMonth() + 1) : (`0${dateFormatted.getMonth() + 1}`);
  
  let year = dateFormatted.getFullYear();

  return `${day}/${month}/${year}`; //  'dia/mês/ano'.

};

export default formatDate;
