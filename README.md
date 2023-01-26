## About Project
In this project, I built a React e-commerce website which presents a selection of products and enables customers to view the details of each one and add it to their shopping cart or favorite items list. Additionally, the user can utilize the website to categorize the products and order them by title or price.
## Technologies
#### For front-end development, I used React.js, including:
React functional component, React-Hooks, React-Routing, React Cookies, Axios, Restful API, Context, and Custom Hooks.
## Features
 * React Axios was used to fetch product data from an API.
 * Contexts were used to store product data, shopping cart data, and wish list (favorite) data.
 * There is a category-based filtering feature (smartphones, Laptops, Fragrances,... etc).
 * Cookies will contain the user token after log-in authentication, allowing the user to logon to the website. The token will be removed from the cookie when the user logs out.
 * Any product can be added or removed from the cart, as well as the quantity added. Also, the user has the ability to add and remove products from their favorite list.
 * dynamic routing and page navigation.
 
## Views
### Home Page
This page will appear to the user when they open the website. On the top of this page, you can see the navbar, and slider. The left and right arrows can be used to move the slider, and the "shop now" button can be used to navigate to the shop page.

<div>
<img src="https://user-images.githubusercontent.com/81569702/214334955-1459e016-dead-4d80-a02e-f4729606303e.PNG"  width="450"  >
<img src="https://user-images.githubusercontent.com/81569702/214337402-b807b367-505e-486a-8926-905967d64e4f.PNG" width="450" >
</div>


Trending products can be seen in the "𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐝" section.

<img src="https://user-images.githubusercontent.com/81569702/214334905-af4ed9f0-98d7-4903-998c-1f5acddf3968.PNG" width="700">

When the user hovers over the product card, the Quick View button will appear. If the button is clicked, a pop-up with product details will be shown.

<img src="https://user-images.githubusercontent.com/81569702/214342606-9b471e17-bf77-4af4-8477-aa646d0715b4.PNG" >

The pop-up displays the product title, description, and slider, which can be moved by hovering over the picture.
<br/>
<div>
<img src="https://user-images.githubusercontent.com/81569702/214343542-1aa66352-e133-4c6d-8d3a-55ef839572ea.PNG"  width="500">
<img src="https://user-images.githubusercontent.com/81569702/214347228-1ffd37e8-40c8-4844-991b-4534b803187c.PNG"  width="500">

</div>
From the pop-up, the user can add\remove the product to shopping-cart increase/decrease the quantity. Also he can add/remove it to faviourt list. You can navigate to product details page using "View Full product Details" button. 

<img src="https://user-images.githubusercontent.com/81569702/214570181-69e8a796-9ded-4b76-aadf-a4da1f513d36.PNG"  width="500">
The product will be shown in the shopping cart and wish list.
<br/>
𝐍𝐚𝐯𝐛𝐚𝐫:
<img src="https://user-images.githubusercontent.com/81569702/214574802-1b4f9aa5-5181-4492-9de0-1bfb3f72223c.PNG" >


<br/>
𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠 𝐜𝐚𝐫𝐭:
<br/>
<img src="https://user-images.githubusercontent.com/81569702/214570828-42f1009b-542c-4fb7-ac66-710da98e6148.PNG"  width="500">

##### Wish List:
<img src="https://user-images.githubusercontent.com/81569702/214570849-e6a35790-feb5-44e1-905e-03f22a572c61.PNG"  width="500">
<br/>
The pictures below show the About, Explore, Shop, and Recommended Videos sections on the Home page.
<div>
<img src="https://user-images.githubusercontent.com/81569702/214334889-f63d11ed-cac2-404f-a0e9-19e28b0d680b.PNG"  width="450"  >
<img src="https://user-images.githubusercontent.com/81569702/214334882-c670dd94-3975-431e-9e89-411f69bdcc8d.PNG" width="450" >
</div>


### Login Page

From the navbar, you can login to your account by inputting your email and password. If some error has occurred, an error message will be shown. If authentication is successful, the home page will be navigated to and the user name and picture will be displayed in the navigation bar.
<br/>

𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐋𝐨𝐠𝐢𝐧:
<div>
<img src="https://user-images.githubusercontent.com/81569702/214651022-3407b0eb-7fbb-4027-96a8-062940a57675.PNG"  width="500"  >
<img src="https://user-images.githubusercontent.com/81569702/214651296-8a7920d1-c2bd-4063-978c-f32b184f6cfd.PNG" width="400" >
</div>
𝐋𝐨𝐠𝐨𝐮𝐭:
<img src="https://user-images.githubusercontent.com/81569702/214652486-1a075ee0-a0b4-4043-a6ff-cf796f06f4ba.PNG"  >
𝐔𝐧𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐋𝐨𝐠𝐢𝐧:
<img src="https://user-images.githubusercontent.com/81569702/214652492-23baf4a0-7019-425b-ab57-07c838f73ed4.PNG"  width="500"  >

### Shopping (products List) Page

On this page, the user can view a banner with a product image, which changes with each product filter (filter by category). At first, just 12 items will be visible; if you wish to see more products, click the "loading" button at the bottom of the products list. Using the sorting bar, the user can arrange the items according to price or title. The sidebar filtering feature also enables category filtering for products. The reset button brings back all previously filtered products.

<div>
<img src="https://user-images.githubusercontent.com/81569702/214661396-af4758dd-bfc9-420a-a0a2-4eb4934c45f4.PNG" width="600" >
<img src="https://user-images.githubusercontent.com/81569702/214661433-b8a51979-e1fe-4462-a323-40342e0e0504.PNG" width="400" >

</div>
</br>
𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐛𝐮𝐭𝐭𝐨𝐧:
<img src="https://user-images.githubusercontent.com/81569702/214661532-685010ef-630d-40aa-bd99-b70720910519.PNG" >

### Product Details Page:
Every product has its own product details page, which can be accessed by clicking the "View Full Product Details" button in the modal pop-up.
The product details section is located at the top of the page and allows you to view the product's details as well as add or remove items from your shopping cart or wishlist. Other sections on the page include customer reviews of products and a collection of products that you might be interested in. 

<div>
<img src="https://user-images.githubusercontent.com/81569702/214822793-42871521-85f2-44d8-a8b5-4c01d7d14355.PNG" width="500" >
<img src="https://user-images.githubusercontent.com/81569702/214822799-038e3c47-7ba5-4355-bdea-a4ebe018d266.PNG"  width="500"  >
<img src="https://user-images.githubusercontent.com/81569702/214822806-6cc027ed-d7e0-4f51-836f-5f5f24d769c6.PNG"  width="500" >
<img src="https://user-images.githubusercontent.com/81569702/214822784-b21c3c3d-c871-4835-adad-24ade7815ecb.PNG"  width="500" >

</div>

### Fabric Page:
<img src="https://user-images.githubusercontent.com/81569702/214823618-145de610-859e-4803-a170-ce1f26df763e.PNG" >

### 404 Error Page:
<img src="https://user-images.githubusercontent.com/81569702/214824005-e6a916aa-9f06-4bc1-8616-d02502b63222.PNG" >




