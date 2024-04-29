import nodemailer from "nodemailer";


const sendEmail=async(recevier,token,req)=>{
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.emailSender,
          pass: process.env.passwordSender,
        },
      });

const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: recevier,
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<a href='${req.protocol}://${req.headers.host}/auth/confirmEmail/${token}'>confirm email</a>
    `,
  });
}

export default sendEmail