export default function handler(req, res) {
  if (req.method === 'POST') {
    const brandVoice = req.body;
    // Aquí puedes guardar los datos en una base de datos
    console.log(brandVoice);
    res.status(200).json({ message: 'Configuración guardada con éxito' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
