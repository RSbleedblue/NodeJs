const NodeMailer = require('nodemailer');
async function SendMail(){
    const transporter = NodeMailer.createTransport({
        service:'gmail',
        auth:{
            user:'/*.........*/',
            pass:'/*.........*/',
        }
    });
    const mailOption = {
        from:'/*.........*/',
        to:'/*.........*/',
        subject:'First NodeJs mail',
        text: 'Hi this is my first mail through nodeJs',
    };
    try{
        const  result = await transporter.sendMail(mailOption);
        console.log("Mail Sent Successfully");
    }
    catch(err){
        console.log("Mail wasnt Sent");
    };
}
SendMail();
