export interface turnosProps {
    horario: string
    paciente: string
    tipoConsulta: string
    nota: string
    status: 'pendiente' | 'completado' | 'cancelado'
  }
  