export function calcularEdad(fechaNacimiento: Date): string {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);

  let años = hoy.getFullYear() - nacimiento.getFullYear();
  let meses = hoy.getMonth() - nacimiento.getMonth();

  if (meses < 0 || (meses === 0 && hoy.getDate() < nacimiento.getDate())) {
    años--;
    meses += 12;
  }

  if (hoy.getDate() < nacimiento.getDate()) {
    meses--;
  }

  if (años >= 1) {
    return años === 1 ? "1 año" : `${años} años`;
  } else {
    return meses <= 1 ? "1 mes" : `${meses} meses`;
  }
}
