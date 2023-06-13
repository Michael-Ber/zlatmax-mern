import nodemailer from "nodemailer";



export const sendMail = async(req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'gabe.schamberger@ethereal.email',
                pass: '9St5xtCprZCSCE16J7'
            },
            tls: {
                ignoreTLS: true
            }
        });

        let result = await transporter.sendMail({
            from: 'gabe.schamberger@ethereal.email',
            to: 'gabe.schamberger@ethereal.email',
            subject: 'Test message for zlatmax project',
            text: 'text',
        });

        return res.json({message: "Письмо отправлено. Скоро мы с вами свяжемся", res: result.messageId})
        
    } catch (error) {
        res.json({message: "Error while sending email", error})
    }
}