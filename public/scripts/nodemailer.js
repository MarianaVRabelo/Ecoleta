const nodemailer = require("nodemailer");

async function main(to, content) {

  try {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
        tls: {
          rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', 
      to: to, 
      subject: "Hello ✔",
      text: content, 
      html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
  } catch (error) {

    console.log("Erro ao enviar mensagem", error)
  }
 
}   

main().catch(console.error);
