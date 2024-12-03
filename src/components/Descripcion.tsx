import '../styles/Descripcion.css'

export default function Descripcion() {
  return (
    <>
      <h2>¿Qué es AppSegurity?</h2>
      <p>Este proyecto es una aplicación de escritorio desarrollada con Electron, diseñada para realizar diversas tareas relacionadas con la gestión de archivos y discos. La aplicación incluye funcionalidades como la búsqueda y generación de informes en PDF, la firma digital de documentos PDF, y la gestión de discos y particiones, incluyendo el formateo de particiones individuales o de todas las particiones de un disco.
      </p>
      <h2>Funcionalidades Principales</h2>
      <ol>
        <li> <strong>Búsqueda y Generación de Informes en PDF:</strong> La aplicación permite a los usuarios buscar archivos en una ruta específica y generar un informe en formato PDF con la lista de archivos encontrados. El informe incluye detalles como el nombre del forense y la fecha y hora de generación. Esta funcionalidad es útil para la gestión y documentación de archivos en entornos forenses o de auditoría.
        </li>
        <li> <strong>Firma Digital de Documentos PDF:</strong> Los usuarios pueden cargar documentos PDF y agregar una firma digital a cada página del documento. Esta funcionalidad asegura la autenticidad e integridad de los documentos, lo cual es crucial en entornos legales y de cumplimiento normativo. La firma se puede personalizar y posicionar en cualquier parte de las páginas del PDF.
        </li>
        <li> <strong>Gestión de Discos y Particiones:</strong> La aplicación incluye una interfaz para listar discos y particiones disponibles en el sistema. Los usuarios pueden seleccionar discos y particiones para realizar operaciones de formateo. Esta funcionalidad es especialmente útil para administradores de sistemas y técnicos que necesitan preparar discos y particiones para su uso o reutilización.
        </li>
      </ol>
      <h2>Detalles Técnicos</h2>
      <ul>
        <li> <strong>main.js:</strong> Este archivo es el punto de entrada de la aplicación. Configura y crea las ventanas principales y secundarias, maneja la comunicación entre el proceso principal y los procesos de renderizado, y define las rutas de los archivos HTML que se cargan en las ventanas.
        </li>
        <li> <strong>preload.js:</strong> Este archivo expone funciones específicas a través de contextBridge para que puedan ser utilizadas en el contexto de los procesos de renderizado. Incluye funciones para listar discos, abrir diálogos de archivos, y generar y firmar documentos PDF.
        </li>
        <li> <strong>rendererClean.js:</strong> Este archivo maneja la lógica de la interfaz de usuario para la gestión de discos y particiones. Incluye funciones para listar discos y particiones, y para realizar operaciones de formateo utilizando comandos diskpart.
        </li>
        <li> <strong>index.html y cleanDisk.html:</strong> Estos archivos HTML definen la estructura de las interfaces de usuario para las diferentes funcionalidades de la aplicación. Incluyen botones, selectores y otros elementos de interfaz necesarios para interactuar con las funcionalidades de la aplicación.
        </li>
      </ul>
      <h2>Uso y Beneficios</h2>
      <p>Esta aplicación es una herramienta poderosa para profesionales que necesitan gestionar archivos y discos de manera eficiente. La capacidad de generar informes en PDF y firmar documentos digitalmente asegura que los usuarios puedan mantener registros precisos y seguros. La funcionalidad de gestión de discos y particiones facilita la preparación y mantenimiento de sistemas de almacenamiento, lo cual es esencial para administradores de sistemas y técnicos de soporte.</p>
      <p>En resumen, esta aplicación de escritorio basada en Electron combina varias funcionalidades críticas en una interfaz unificada, proporcionando a los usuarios una herramienta versátil y eficiente para la gestión de archivos y discos.</p>
    </>
  );
}