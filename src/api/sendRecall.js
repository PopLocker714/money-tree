export default (req, res) => {
  const { name, phone } = req.body;
  console.log(name, phone);

  fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN || ""}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.BOT_CHAT_ID,
        text: `
  Запрос за обратный звонок!
Имя: ${name}
Телефон: ${phone}
        `,
        parse_mode: "HTML",
      }),
    },
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  res.send(true);
};
