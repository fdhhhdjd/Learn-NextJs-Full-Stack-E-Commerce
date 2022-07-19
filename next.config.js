// module.exports = {
//   env: {
//     // BASE_URL: "http://localhost:3000",
//     BASE_URL: "https://learn-next-js-full-stack-e-commerce.vercel.app/",
//     MONGODB_URL:
//       "mongodb+srv://fdhhhdjd:1471010a@e-commerce.icglfpu.mongodb.net/E-Commerce?retryWrites=true&w=majority",
//     ACCESS_TOKEN_SECRET: "^H-.DtM^_9tG94MTr}Vq77{{js}k{BazC&FX&'f{WNRHT=mvhb",
//     REFRESH_TOKEN_SECRET:
//       "t>/!U;?^aF`uM~7T65z[\5<$WM9}cn>rX~X5]rDA)9Gk6e(4/S[fG_J5=4v}amhaG3Uq,]XpRr9VB(8WXUc8-sb&^DWkz:QDcb+=",
//     PAYPAL_CLIENT_ID:
//       "AQfD_9MAwnLZPGQ5RQKn_0VCvoFN2yi2HicZCD9DntGi2GbntVuTNY3Ky2AiJEfTKm6WPLNSUEvO07CH",
//     CLOUD_UPDATE_PRESET: "llfemrxg",
//     CLOUD_NAME: "auth",
//     CLOUD_API: "https://api.cloudinary.com/v1_1/taithinhnam/image/upload",
//   },
// };
require("dotenv").config();
module.exports = {
  env: {
    // BASE_URL: "http://localhost:3000",
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    MONGODB_URL: process.env.NEXT_PUBLIC_MONGODB_URL,
    ACCESS_TOKEN_SECRET: process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET,
    PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    CLOUD_UPDATE_PRESET: process.CLOUD_UPDATE_PRESET,
    CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUD_NAME,
    CLOUD_API: process.env.NEXT_PUBLIC_CLOUD_API,
  },
};
