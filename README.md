# 🛍️ E-Commerce mydokan

This is a **powerful and modular E-Commerce REST API** built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
It provides a complete backend solution for managing products, users, orders, authentication, payments, reviews, carts, wishlists, and more — designed for scalability and security.
<h5>Server Health Test: </h5> <h6>https://e-commerce-mydokan.vercel.app/api/status</h6>
---

## 🚀 Features

✅ **User Authentication**
- OTP-based login & verification  
- JWT token authentication  
- Secure user session and logout

✅ **Product Management**
- Product listing by brand, category, keyword, and remark  
- Product details, reviews, and sliders  
- Smart filtering and related product suggestions  

✅ **Cart & Wishlist**
- Add, update, and remove items from cart  
- Manage wishlist with authentication  

✅ **Invoice & Payment**
- Create invoices dynamically  
- Payment status handling (Success, Cancel, Fail, IPN)  

✅ **Security Features**
- Helmet, CORS, HPP, and XSS protection  
- Rate limiting and MongoDB sanitization  
- Encrypted tokens and cookies  

✅ **Other Functionalities**
- Brand and Category creation  
- Feature and Legal details API  
- Fully modular controller-based structure  

---

## 🧠 Tech Stack

| Category        | Technology Used |
|-----------------|-----------------|
| Runtime         | Node.js         |
| Framework       | Express.js      |
| Database        | MongoDB (Mongoose) |
| Authentication  | JWT & Cookie Parser |
| Security        | Helmet, xss-clean, express-rate-limit, hpp |
| Environment     | dotenv          |
| Utilities       | Nodemailer, Axios, Form-Data |

---

## 📁 Folder Structure


```
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 client/
│   ├── 📁 .git/ 🚫 (auto-hidden)
│   ├── 📁 dist/ 🚫 (auto-hidden)
│   ├── 📁 node_modules/ 🚫 (auto-hidden)
│   ├── 📁 public/
│   │   └── 🖼️ vite.svg
│   ├── 📁 src/
│   │   ├── 📁 assets/
│   │   │   ├── 📁 css/
│   │   │   │   ├── 🎨 animate.min.css 🚫 (auto-hidden)
│   │   │   │   └── 🎨 main.css
│   │   │   └── 📁 images/
│   │   │       ├── 🖼️ ImagePlaceholder.svg
│   │   │       ├── 🖼️ f1.svg
│   │   │       ├── 🖼️ f2.svg
│   │   │       ├── 🖼️ f3.svg
│   │   │       ├── 🖼️ f4.svg
│   │   │       ├── 🖼️ hero-bg.svg
│   │   │       ├── 📄 image.json
│   │   │       ├── 🖼️ mydokanlogo.png
│   │   │       ├── 🖼️ no-results.png
│   │   │       ├── 🖼️ pay.png
│   │   │       ├── 🖼️ payment.png
│   │   │       └── 🖼️ plainb-logo.svg
│   │   ├── 📁 components/
│   │   │   ├── 📁 cart/
│   │   │   │   ├── 📄 CartList.jsx
│   │   │   │   └── 📄 CartSubmitButton.jsx
│   │   │   ├── 📁 features/
│   │   │   │   ├── 📄 Features.jsx
│   │   │   │   └── 📄 LegalsContent.jsx
│   │   │   ├── 📁 invoice/
│   │   │   │   ├── 📄 InvoiceDetails.jsx
│   │   │   │   ├── 📄 InvoiceList.jsx
│   │   │   │   └── 📄 ReviewSubmitButton.jsx
│   │   │   ├── 📁 layout/
│   │   │   │   ├── 📄 Footer.jsx
│   │   │   │   ├── 📄 Layout.jsx
│   │   │   │   ├── 📄 NavBar.jsx
│   │   │   │   └── 📄 NoData.jsx
│   │   │   ├── 📁 product/
│   │   │   │   ├── 📄 Brands.jsx
│   │   │   │   ├── 📄 Categories.jsx
│   │   │   │   ├── 📄 Details.jsx
│   │   │   │   ├── 📄 ProductImages.jsx
│   │   │   │   ├── 📄 ProductList.jsx
│   │   │   │   ├── 📄 Products.jsx
│   │   │   │   ├── 📄 Reviews.jsx
│   │   │   │   └── 📄 Slider.jsx
│   │   │   ├── 📁 user/
│   │   │   │   ├── 📄 LoginForm.jsx
│   │   │   │   ├── 📄 OTPFrom.jsx
│   │   │   │   ├── 📄 ProfileForm.jsx
│   │   │   │   └── 📄 UserSubmitButton.jsx
│   │   │   └── 📁 wish/
│   │   │       ├── 📄 WishList.jsx
│   │   │       └── 📄 WishSubmitButton.jsx
│   │   ├── 📁 pages/
│   │   │   ├── 📄 AboutPage.jsx
│   │   │   ├── 📄 CartPage.jsx
│   │   │   ├── 📄 ComplainPage.jsx
│   │   │   ├── 📄 ContactPage.jsx
│   │   │   ├── 📄 Home.jsx
│   │   │   ├── 📄 HowtoBuyPage.jsx
│   │   │   ├── 📄 InvoicePage.jsx
│   │   │   ├── 📄 LogInPage.jsx
│   │   │   ├── 📄 OTPpage.jsx
│   │   │   ├── 📄 OrderPage.jsx
│   │   │   ├── 📄 PrivacyPolicyPage.jsx
│   │   │   ├── 📄 ProductByBrand.jsx
│   │   │   ├── 📄 ProductByCategory.jsx
│   │   │   ├── 📄 ProductByKeyword.jsx
│   │   │   ├── 📄 ProductDetails.jsx
│   │   │   ├── 📄 ProfilePage.jsx
│   │   │   ├── 📄 RefundPage.jsx
│   │   │   ├── 📄 TermsPage.jsx
│   │   │   └── 📄 WishPage.jsx
│   │   ├── 📁 skeleton/
│   │   │   ├── 📄 BrandsSkeleton.jsx
│   │   │   ├── 📄 CategorySkeleton.jsx
│   │   │   ├── 📄 CertSkeleton.jsx
│   │   │   ├── 📄 FeatureSkeleton.jsx
│   │   │   ├── 📄 LegalContentSkeleton.jsx
│   │   │   ├── 📄 ProductDetailsSkeleton.jsx
│   │   │   ├── 📄 ProductsSkeleton.jsx
│   │   │   ├── 📄 ProfileSkeleton.jsx
│   │   │   └── 📄 SliderSkeleton.jsx
│   │   ├── 📁 store/
│   │   │   ├── 📄 CartStore.js
│   │   │   ├── 📄 FeatureStore.js
│   │   │   ├── 📄 InvoiceStore.js
│   │   │   ├── 📄 ProductStore.js
│   │   │   ├── 📄 ReviewStore.js
│   │   │   ├── 📄 UserStore.js
│   │   │   └── 📄 WishStore.js
│   │   ├── 📁 utility/
│   │   │   ├── 📄 ValidationHelper.js
│   │   │   └── 📄 utility.js
│   │   ├── 📄 App.jsx
│   │   ├── 🎨 index.css
│   │   └── 📄 main.jsx
│   ├── 🚫 .gitignore
│   ├── 📖 README.md
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   ├── 📄 vercel.json
│   └── 📄 vite.config.js
├── 📁 dummy-data/
│   ├── 📄 Emial_SMTP.txt
│   ├── 📄 brands.json
│   ├── 📄 carts.json
│   ├── 📄 categories.json
│   ├── 📄 features.json
│   ├── 📄 invoiceproducts.json
│   ├── 📄 invoices.json
│   ├── 📄 legals.json
│   ├── 📄 paymentsettings.json
│   ├── 📄 productdetails.json
│   ├── 📄 products.json
│   ├── 📄 productsliders.json
│   ├── 📄 profiles.json
│   ├── 📄 reviews.json
│   ├── 📄 users.json
│   └── 📄 wishes.json
├── 📁 node_modules/ 🚫 (auto-hidden)
├── 📁 src/
│   ├── 📁 config/
│   │   └── 📄 config.js
│   ├── 📁 controllers/
│   │   ├── 📄 CartListController.js
│   │   ├── 📄 FeaturesController.js
│   │   ├── 📄 InvoiceController.js
│   │   ├── 📄 ProductController.js
│   │   ├── 📄 UserController.js
│   │   └── 📄 WishListController.js
│   ├── 📁 middlewares/
│   │   └── 📄 AuthVerification.js
│   ├── 📁 models/
│   │   ├── 📄 BrandModel.js
│   │   ├── 📄 CartModel.js
│   │   ├── 📄 CategoryModel.js
│   │   ├── 📄 FeaturesModel.js
│   │   ├── 📄 InvoiceModel.js
│   │   ├── 📄 InvoiceProductModel.js
│   │   ├── 📄 LegalModel.js
│   │   ├── 📄 PaymentSettingModel.js
│   │   ├── 📄 ProductDetailsModel.js
│   │   ├── 📄 ProductModel.js
│   │   ├── 📄 ProductSliderModel.js
│   │   ├── 📄 ProfileModel.js
│   │   ├── 📄 ReviewModel.js
│   │   ├── 📄 UserModel.js
│   │   └── 📄 WishModel.js
│   ├── 📁 routers/
│   │   └── 📄 api.js
│   ├── 📁 services/
│   │   ├── 📄 CartListServices.js
│   │   ├── 📄 FeaturesServices.js
│   │   ├── 📄 InvoiceServices.js
│   │   ├── 📄 ProductServices.js
│   │   ├── 📄 UserServices.js
│   │   └── 📄 WishListServices.js
│   └── 📁 utils/
│       ├── 📄 EmailHelper.js
│       └── 📄 TokenHelper.js
├── 🔒 .env 🚫 (auto-hidden)
├── 🚫 .gitignore
├── 📖 README.md
├── 📄 app.js
├── 📄 index.js
├── 📄 package-lock.json
├── 📄 package.json
└── 📄 vercel.json
```

---

## Create .env File
MONGO_URL=
BREVO_SMTP_KEY=
BREVO_SMTP_USER=
EMAIL_FROM=
JWT_SECRET=
JWT_SECRET_EXPIRE_IN=24h
SMTP_HOST=
SMTP_PORT=
PORT=8080


<h6>🔗 API Endpoints</h6>
GET /productBrandList — Get all product brands

POST /CreateBrandList — Create a new brand

GET /ProductCategoryList — Get all product categories

GET /ProductSliderList — Get product slider list

GET /ProductListByBrand/:brandID — Get products by brand ID

GET /ProductListByCategory/:categoryID — Get products by category ID

GET /ProductListBySmilier/:categoryID — Get similar products by category

GET /ProductListByKeyword/:Keyword — Search products by keyword

GET /ProductListByRemark/:Remark — Get products by remark type

GET /ProductDetails/:ProductID — Get detailed product info

POST /create-review — Create a new product review (Auth required)

GET /review-list/:ProductID — Get product review list

POST /list-by-filter — Get filtered product list



<h6>👤 User Routes</h6>
GET /UserOTP/:email — Send OTP to user email

GET /VerifyLogin/:email/:otp — Verify OTP and log in user

GET /UserLogout — Logout user (Auth required)

POST /CreateProfile — Create user profile (Auth required)

GET /ReadProfile — Read user profile (Auth required)

PUT /UpdateProfile — Update user profile (Auth required)



<h6>❤️ Wishlist Routes</h6>
POST /SaveWishList — Add product to wishlist (Auth required)

DELETE /RemoveWishList — Remove product from wishlist (Auth required)

GET /WishList — Get user wishlist (Auth required)


<h6>🛒 Cart Routes</h6>
POST /SaveCartList — Add product to cart (Auth required)

POST /UpdateCartList/:cartID — Update cart item (Auth required)

POST /RemoveCartList — Remove item from cart (Auth required)

GET /CartList — Get all cart items (Auth required)


<h6>💳 Invoice & Payment Routes</h6>
GET /CreateInvoice — Create new invoice (Auth required)

GET /InvoiceList — Get all invoices (Auth required)

GET /InvoiceProductList/:invoice_id — Get products under an invoice (Auth required)

POST /PaymentSuccess/:trxID — Handle payment success

POST /PaymentCancel/:trxID — Handle payment cancellation

POST /PaymentFail/:trxID — Handle failed payment

POST /PaymentIPN/:trxID — Handle payment IPN callback


<h6>⚙️ Feature & Legal Routes</h6>
GET /FeaturesList — Get all feature list

GET /LegalDetails/:type — Get legal page details by type


