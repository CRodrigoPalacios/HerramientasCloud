import Groq from 'groq-sdk';

interface ChatbotOptions {
  question: string;
  context?: 'ventas' | 'envio' | 'garantia' | 'soporte';
}

const contextMap: Record<NonNullable<ChatbotOptions['context']>, string> = {
  ventas:
    'Ayuda al cliente a elegir un reloj que se adapte a sus gustos, estilo y necesidades.',
  envio:
    'Resuelve dudas sobre métodos de envío, plazos de entrega y zonas de cobertura.',
  garantia:
    'Explica las políticas de garantía, devoluciones y cambios de productos.',
  soporte:
    'Brinda soporte técnico relacionado a compras, pagos y navegación del sitio web.',
};

export const ecommerceChatbotUseCase = async (
  groq: Groq,
  options: ChatbotOptions,
) => {
  const { question, context = 'ventas' } = options;
  const contextMessage = contextMap[context] || contextMap['ventas'];

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: [
          'Eres un asistente virtual amable y eficiente de una tienda online especializada en la venta de relojes.',
          contextMessage,
          'Responde de forma clara, útil y con un tono conversacional que genere confianza en el cliente.',
          'Evita tecnicismos y mantén las respuestas breves y enfocadas en resolver la consulta.',
        ].join(' '),
      },
      {
        role: 'user',
        content: question,
      },
    ],
    model: 'llama-3.3-70b-versatile',
    temperature: 0.7,
  });

  const content = completion.choices[0].message.content;
  if (!content) throw new Error('No content returned from Groq.');

  return { answer: content };
};
