const crypto =  require('crypto');


class HashService{
    hashOtp(data){
      return crypto.createHmac('sha256', process.env.HASH_SECRET).update(data).digest('hex');
                        //algo          secret key
    }           
}

module.exports = new HashService();
