export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col p-5 gap-2 items-center">
      <section>
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

        <p className="mb-4">
          En <strong>PlayStat</strong>, valoramos tu privacidad y protegemos tus
          datos personales. Esta política explica cómo recopilamos, usamos y
          protegemos tu información.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Datos que recopilamos
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Información de registro: nombre de usuario, email y contraseña
            (encriptada).
          </li>
          <li>
            Estadísticas deportivas que vos mismo cargás (tiros, porcentajes,
            zonas, etc.).
          </li>
          <li>
            Datos técnicos básicos como navegador, país o dispositivo (solo con
            fines analíticos).
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Uso de la información
        </h2>
        <p className="mb-4">
          Usamos tus datos únicamente para permitir el funcionamiento de la
          aplicación, mostrar tus estadísticas y mejorar la experiencia del
          usuario.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Seguridad</h2>
        <p className="mb-4">
          Tu información se guarda de forma segura y tus contraseñas se cifran
          antes de almacenarse. Nunca compartimos tus datos con terceros sin tu
          consentimiento.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Tus derechos</h2>
        <p className="mb-4">
          Podés solicitar la eliminación de tu cuenta o la exportación de tus
          datos escribiendo a{" "}
          <a
            href="mailto:soporte@playstat.com"
            className="text-sky-600 underline"
          >
            soporte@playstat.com
          </a>
          .
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
