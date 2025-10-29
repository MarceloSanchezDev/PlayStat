export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col p-5 gap-2 items-center">
      <section>
        <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>

        <p className="mb-4">
          Bienvenido a <strong>PlayStat</strong>. Al registrarte o usar nuestra
          aplicación, aceptás los siguientes términos y condiciones.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Uso permitido</h2>
        <p className="mb-4">
          Esta aplicación está destinada únicamente al seguimiento y análisis de
          estadísticas de baloncesto. No debe utilizarse con fines ilegales o
          comerciales sin autorización.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Propiedad intelectual
        </h2>
        <p className="mb-4">
          Todo el contenido, código y diseño de <strong>PlayStat</strong> son
          propiedad del desarrollador y no pueden ser copiados ni redistribuidos
          sin permiso.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Responsabilidad</h2>
        <p className="mb-4">
          PlayStat no se hace responsable por errores en los datos cargados por
          el usuario ni por fallos derivados del mal uso de la aplicación.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Modificaciones</h2>
        <p className="mb-4">
          Nos reservamos el derecho de modificar estos términos en cualquier
          momento. Las versiones actualizadas se publicarán en esta página.
        </p>
      </section>
      <section>
        <p className="text-sm text-gray-500 mt-8">
          Última actualización: {new Date().toLocaleDateString("es-AR")}
        </p>
      </section>
    </main>
  );
}
