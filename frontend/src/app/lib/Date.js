export  function ObtenerHora() {
  const now = new Date()

  // Obtener la hora, los minutos y los segundos
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Formatear la hora para que siempre tenga dos dígitos
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
const formattedSeconds = seconds.toString().padStart(2, '0')
  // Combinar todo en un solo string
  const timeString = `T${formattedHours}:${formattedMinutes}:${formattedSeconds}`

  return [timeString]
}

export function GetFecha() {
  const date = new Date() // replace(/ /g,'-')
  const dia = date.getDate()
  const mes = date.getMonth() 
  const año = date.getUTCFullYear()
  const fechaCompleta = `${año}-${mes}-${dia}`
  return [fechaCompleta]
}

export function DateComplete() {
  const [Fecha] = GetFecha()
  const [Horario] = ObtenerHora()
  const DatoCompleto = Fecha + Horario

  return [DatoCompleto]
}
