const otpService =  require('../services/otp-service')
const hashService =  require('../services/hash-service')

class AuthController {
   async sendOtp(req,res){


        const { phone } = req.body;
        if(!phone){
            res.status(400).json({message: 'Phone field is required! '})
        }
        const otp = await otpService.generateOtp();

        //Hash
        const ttl = 1000 * 60 *3; //otp will expire in 3 min
        const expires =  Date.now() + ttl;
        const data =  `${phone}.${otp}.${expires}`
        const hash =  hashService.hashOtp(data);

        res.json({hash})
    }
}

module.exports = new AuthController();
