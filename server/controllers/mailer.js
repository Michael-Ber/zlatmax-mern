import * as nodemailer from "nodemailer";



export const sendMail = async(req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 465,
            secure: true,
            // proxy: "http://proxy.ilimbratskdok.local:3128",
            tls:{
                rejectUnauthorized:false
            },
            auth: {
                user: 'gabe.schamberger@ethereal.email',
                pass: '9St5xtCprZCSCE16J7'
            },
            logger: true,
            debug: true
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