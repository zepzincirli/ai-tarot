export async function getTarotReading(card) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are a positive, clear, and insightful tarot reader.",
        },
        {
          role: "user",
          content: `Card: ${card}. Explain in detail the meaning of this card for today..`,
        },
      ],
    }),
  });

  const data = await response.json();
  return data?.choices?.[0]?.message?.content || "No response received.";
}
