const axios = require("axios");
exports.send_notification = async (notification) => {
  await axios({
    method: "post",
    url: "https://fcm.googleapis.com/fcm/send",
    headers: {
      Authorization:
        "key=" +
        "AAAA9y6S3o9:APA91bF0RmvLGm6-NMvmy-NuLar29ZJk79EtYMVsaGamVUqdAlfY-ziHkR5OIpM1Q7wC7Sna4VbzYTPypuL2vG7c2q8olZo9Ly_Rw6oHj0N0JwdtCwYAXSOLvRB8FDY-cPZ_fiqLF9lL",
    },
    data: notification,
  });
};
