const TZ_SANTIAGO = "America/Santiago";

// DB "date" columns come back as "YYYY-MM-DD". Anchor at noon UTC so the same
// calendar day is preserved no matter which timezone formats the Date later.
export function parseFechaCalendario(fecha: string): Date {
  return new Date(`${fecha}T12:00:00Z`);
}

// YYYY-MM-DD as seen in Santiago, suitable for <input type="date">.
export function formatFechaInput(fecha: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ_SANTIAGO,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(fecha);
}

export function formatFechaCorta(fecha: Date): string {
  return fecha.toLocaleDateString("es-CL", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: TZ_SANTIAGO,
  });
}

function getPartesSantiago(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ_SANTIAGO,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  return {
    year: Number(parts.find((p) => p.type === "year")!.value),
    month: Number(parts.find((p) => p.type === "month")!.value),
    day: Number(parts.find((p) => p.type === "day")!.value),
  };
}

function formatTiempoTranscurrido(fecha: Date): string {
  const hoy = getPartesSantiago(new Date());
  const desde = getPartesSantiago(fecha);

  let años = hoy.year - desde.year;
  let meses = hoy.month - desde.month;

  if (meses < 0 || (meses === 0 && hoy.day < desde.day)) {
    años--;
    meses += 12;
  }

  if (hoy.day < desde.day) {
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
