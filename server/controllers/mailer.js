import * as nodemailer from "nodemailer";



export const sendMail = async(req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_ADDR,
                pass: process.env.GOOGLE_PWD
            },
            logger: true,
            debug: true
        });

        let result = await transporter.sendMail({
            from: req.body.email,
            to: 'mikeber000@gmail.com',
            subject: 'Test message for zlatmax project',
            text: req.body.text + `\nОтправитель: ${req.body.email}`,
        });

        return res.json({message: "Письмо отправлено. Скоро мы с вами свяжемся", res: result.messageId})
        
    } catch (error) {
        res.json({message: "Error while sending email", error})
    }
}