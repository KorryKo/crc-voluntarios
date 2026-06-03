function formatTiempoTranscurrido(fecha: Date): string {
  const hoy = new Date();
  const desde = new Date(fecha);

  let años = hoy.getFullYear() - desde.getFullYear();
  let meses = hoy.getMonth() - desde.getMonth();

  if (meses < 0 || (meses === 0 && hoy.getDate() < desde.getDate())) {
    años--;
    meses += 12;
  }

  if (hoy.getDate() < desde.getDate()) {
    meses--;
  }

  if (años >= 1) {
    return años === 1 ? "1 año" : `${años} años`;
  } else {
    return meses <= 1 ? "1 mes" : `${meses} meses`;
  }
}

export const calcularEdad = formatTiempoTranscurrido;
export const tiempoEnRefugio = formatTiempoTranscurrido;
