
# Jk Elite Securities Warehouse

A security products warehouse management website. It Keeps the records of newly stocked products and delevered products with date and time and helps an employee identify the low stock products very easily. It also shows products that has been added to the warehouse stock in last 7 days. A `Bar-chart` is given in `Home` page which demonstrate to user all inventory items **stocked qty vs delivered qty with product creation date** so that an employee can understand his products stock and delivery records.
## Live Site Link

https://jk-elite-securities-warehouse.web.app/


## Features

- A User can add, delete, and manage any specific product very easily. 

- User can see the details of any specific product by clicking on that product name and can update their stocked quantity data and delivered data, also a user can see the **low stock product in red background**.

- `Authentication system` : Email-password sign-up/sign-in is available Or user can sign-in with Google. Sign-in is **required** before doing all the operations(Add product, manage product etc).

- Implemented `JWT(jsonwebtoken)` in email-password sign-in and google sign-in for authorization.

- First 6 inventory items is displayed in home page `Items Inventory` section. There is a `Manage Products` button that will navigate user to `Manage All Security Products` page. All the inventory items is there in table form.

- A logged-in user can see and manage his/her added items in `My Items` page.

- In `Home` page user can see all the products that has been added **in last seven days**.

- In `Home` page a `Bar-chart` is provided where user can see all inventory items **stocked qty vs delivered qty data with product creation date**.

### Product Adding Feature
- In form, a user must provide a valid image link in `Image Link` field, a valid `price` and `quantity` value greater than 0 otherwise the user will get an error toast notification Or field error message and the form will not be submited.
- After submiting the form successfully, user will get a **success** toast notification and if anything error occured then user will get **error** notification.

### Manage Products Features

- In `Manage-products` page, A user can see all inventory items information in `table` form. Like -
| `Product Name`|`Categories`|`Quantity`|`Price`|`Added On`|`Supplier`|`Delete`|

- Clicking on `Product Name` a user will be navigated to the details of that particular product.

- **Low-stock product identification**: Whenever any product's stocked `quantity value` dropped under 100 then the `Quantity value` background color turned into `red`. This will help the user to identify easily which of the inventory items are in `low stock`.  

- `Deleting an inventory item` : A user can easily delete any inventory item by clicking on `Trash Icon`. After clicking a confirmation dialog box will ask for confirmation. After confirmation the target item will be successfully deleted from database and also from UI.

### Detail Product Features

- In details product page a user can update `Quantity` & `Delivered` data at the same time by clicking `Delivered button`. Each click will increase `Delivered` value by 1 and decrease stocked `Quantity` value by 1. This operation is executed concurrently in database and in UI.

- **Low-stock Quantity Indication**: If this particular product's stocked `quantity` value dropped under 100 then the `Quantity` value background color turned into `red`. This will indicate the user the product is in `low stock`.

- **Clear Delivered Qty button** : On clicking that a user can clear the `Delivered` data record. But before that the user will be asked for confirmation with a **PIN** number. After providing the correct **PIN** only, the `Delivered` data record will be cleared. For convenience the `PIN` is mentioned in the bottom of the page at **Basic Instructions**.

### Re-stocking the Product Quantity in Product details page 
- If Any valid and positive value between `1-3000` is provided in the input field then it will add the given value with the current `Quantity` value of the product.

- Providing `0 Or negative value` is not allowed and system will prompt an error toast notification.

- User can re-stock items **more than 1000 in total (existing qty + new qty) only after `confirmation each time.** **Note:** This limit can be changed as requirements.

- Re-stocking items **more than 3000 in total (existing qty + new qty)** is not allowed at the same time. **Note:** This limit can be changed as requirements.

**Note:** The mentioned validation and limited re-stocking is implemented just for showing an instance of a mid-level warehouse company, where their weekly sales in the market average 50-100 pises of each product. This can be changed based on requirements.

### My-Items Feature 
- A logged in user can see his added items sorted in latest added to first added in the `my-items` page if he/she added any.

- **JWT(jsonwebtoken) Authorization** : After logged-in only an authorized user will be able to see his added items in `my-items` page. **A user will be logged-out automatically after expiration of `jwt token` when he visit `my-items` page**. Logged-in user's token will be **expired after 10 hour** from login.

- On clicking `Manage button` a user can manage and see the details of any particular product added by him/her.

- On cliking `Delete` button a user can **delete** any item added by him/her after clicking `Ok` in confirmation dialog box. Then the particular product will be deleted parmanently from database and also from UI. For this a `success` toast notification will be displayed.

## Technology

### Front-end :
- HTML-5, CSS-3
- **`Styling and Component library :`** **Tailwind css v3**, **headlessUI-react**, 
- **React**
- **React Router**
- **Axios**
- **`Authentication :`** **Firebase**
- **`Date & Time :`** **moment.js**
- **`Charts :`** **react-google-charts**
- **`Animation` :** **react-type-animation**
- **`Toast Notification` :** **react-toastify**
- **`Dev Tool : `** **Vite**

### Backend :
- **Node**
- **Express**
- **`Database` :** **mongoDB**
- **`Authentication / Authorization` :** **JWT (jsonwebtoken)**
- **`Date & Time` :** **moment.js**