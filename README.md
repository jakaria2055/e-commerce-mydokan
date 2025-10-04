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


---
<h6>🔗 API Endpoints</h6>
| Method | Endpoint                             | Description                   |
| ------ | ------------------------------------ | ----------------------------- |
| GET    | `/productBrandList`                  | Get all product brands        |
| POST   | `/CreateBrandList`                   | Create new brand              |
| GET    | `/ProductCategoryList`               | Get all product categories    |
| GET    | `/ProductSliderList`                 | Get product slider list       |
| GET    | `/ProductListByBrand/:brandID`       | Get products by brand         |
| GET    | `/ProductListByCategory/:categoryID` | Get products by category      |
| GET    | `/ProductListBySmilier/:categoryID`  | Get similar products          |
| GET    | `/ProductListByKeyword/:Keyword`     | Search products by keyword    |
| GET    | `/ProductListByRemark/:Remark`       | Get products by remark        |
| GET    | `/ProductDetails/:ProductID`         | Get product details           |
| POST   | `/create-review`                     | Add review (Auth required)    |
| GET    | `/review-list/:ProductID`            | Get all reviews for a product |
| POST   | `/list-by-filter`                    | Filter product list           |
---


---
<h6>👤 User Routes</h6>
| Method | Endpoint                   | Description                |
| ------ | -------------------------- | -------------------------- |
| GET    | `/UserOTP/:email`          | Send OTP to user email     |
| GET    | `/VerifyLogin/:email/:otp` | Verify login with OTP      |
| GET    | `/UserLogout`              | Logout user                |
| POST   | `/CreateProfile`           | Create user profile        |
| GET    | `/ReadProfile`             | Get user profile (Auth)    |
| PUT    | `/UpdateProfile`           | Update user profile (Auth) |
---


---
<h6>❤️ Wishlist Routes</h6>
| Method | Endpoint          | Description                  |
| ------ | ----------------- | ---------------------------- |
| POST   | `/SaveWishList`   | Add product to wishlist      |
| DELETE | `/RemoveWishList` | Remove product from wishlist |
| GET    | `/WishList`       | Get wishlist items           |
---

---
<h6>🛒 Cart Routes</h6>
| Method | Endpoint                  | Description              |
| ------ | ------------------------- | ------------------------ |
| POST   | `/SaveCartList`           | Add product to cart      |
| POST   | `/UpdateCartList/:cartID` | Update cart item         |
| POST   | `/RemoveCartList`         | Remove product from cart |
| GET    | `/CartList`               | Get all cart items       |
---


---
<h6>💳 Invoice & Payment Routes</h6>
| Method | Endpoint                          | Description                 |
| ------ | --------------------------------- | --------------------------- |
| GET    | `/CreateInvoice`                  | Create new invoice          |
| GET    | `/InvoiceList`                    | Get list of invoices        |
| GET    | `/InvoiceProductList/:invoice_id` | Get products for an invoice |
| POST   | `/PaymentSuccess/:trxID`          | Handle payment success      |
| POST   | `/PaymentCancel/:trxID`           | Handle payment cancel       |
| POST   | `/PaymentFail/:trxID`             | Handle payment failure      |
| POST   | `/PaymentIPN/:trxID`              | Payment IPN callback        |
---



