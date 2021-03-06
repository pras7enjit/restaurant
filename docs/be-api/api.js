/**
 * APIs to work with Restaurant
 * @namespace Restaurant
 */


/**
 * @summary Create Restaurant
 * @description Create Restaurant
 * @name POST /restaurants
 * @function
 * @memberof Restaurant
 * @param {Text} name - name of the City.
 * @param {Text} address - Address of the restaurant.
 * @param {Text} branch - Branch of the restaurant.
 * @param {Text} isClosed - If restaurant closed
 * @returns {JSON}
 * @example
 * // returns success
 * status 200 
 * @example
 * // returns error
 * status 400 
 * body {{
 *   "errorCode": 400,
 *   "message": "The request cannot be fulfilled due to bad syntax"
 *	}
 */

 /**
 * @summary Create menu
 * @description Create menu
 * @name POST /menu/create/:id
 * @function
 * @memberof Restaurant
 * @param {Text} beverages - name of the City.
 * @param {Text} deserts - Address of the restaurant.
 * @param {Text} mainCourseNonVeg - Branch of the restaurant.
 * @param {Text} mainCourseVeg - If restaurant closed.
 * @param {Text} statersNonVeg - name of the City.
 * @param {Text} statersVeg - name of the City.
 * @param {Text} snacks - name of the City.
 * @returns {JSON}
 * @example
 * // returns success
 * status 200 
 * @example
 * // returns error
 * body {
 *   "errorCode": 400,
 *   "message": "The request cannot be fulfilled due to bad syntax"
 *	}
 * {
 *   "errorCode": 409,
 *  "message": "The request could not be completed because of a conflict in the request... Menu Exits, Please update menu."
 *	}
 * notFound: {errorCode: 404, message: "Resource Not Found"}
 */

 /**
 * @summary Create menu
 * @description Create menu
 * @name POST /menu/create/:id
 * @function
 * @memberof Restaurant
 * @param {Text} beverages - name of the City.
 * @param {Text} deserts - Address of the restaurant.
 * @param {Text} mainCourseNonVeg - Branch of the restaurant.
 * @param {Text} mainCourseVeg - If restaurant closed.
 * @param {Text} statersNonVeg - name of the City.
 * @param {Text} statersVeg - name of the City.
 * @param {Text} snacks - name of the City.
 * @returns {JSON}
 * @example
 * // returns success
 * status 200 
 * @example
 * // returns error
 * body {
 *   "errorCode": 400,
 *   "message": "The request cannot be fulfilled due to bad syntax"
 *	}
 * {
 *   "errorCode": 409,
 *  "message": "The request could not be completed because of a conflict in the request... Menu Exits, Please update menu."
 *	}
 * notFound: {errorCode: 404, message: "Resource Not Found"}
 */


/**
 * @summary Update menu
 * @description Update menu
 * @name POST /menu/create/:id
 * @function
 * @memberof Retaurant
 * @param {Text} beverages - name of the City.
 * @param {Text} deserts - Address of the restaurant.
 * @param {Text} mainCourseNonVeg - Branch of the restaurant.
 * @param {Text} mainCourseVeg - If restaurant closed.
 * @param {Text} statersNonVeg - name of the City.
 * @param {Text} statersVeg - name of the City.
 * @param {Text} snacks - name of the City.
 * @returns {JSON}
 * @example
 * // returns success
 * status 200 
 * @example
 * // returns error
 * status 400 
 * body {
 *   "errorCode": 404,
 *   "message": "No such menu"
 * }
 * {
 *   errorCode: 500,
 *   message: 'Error when updating menu.',
 *   //error: err
 *	}
 */

 /**
 * @summary Get Restaurant Details
 * @description Get Restaurant Details
 * @name GET /restaurants/:id
 * @function
 * @memberof Restaurant
 * @query {params} id - Restaurant id
 * @returns {JSON}
 * @example
 * // returns success
 * status 200
 * body {
 *   "restaurantDetail": {
 *       "_id": "5943fd9467af5a599b45c043",
 *       "name": "CCD",
 *       "address": "WhiteField",
 *       "isActive": true,
 *       "isClosed": false,
 *       "created": "2017-06-16T15:47:32.128Z",
 *       "updated": "2017-06-16T15:47:32.128Z",
 *       "__v": 0
 *   },
 *   "menu": {
 *       "beverages": [
 *           {
 *               "price": "110",
 *               "name": "virgin mojito"
 *           },
 *           {
 *               "price": 80,
 *               "name": "lime soda"
 *           }
 *       ],
 *       "deserts": [
 *           {
 *               "price": 150,
 *               "name": "ices vanila"
 *           },
 *           {
 *               "price": 200,
 *               "name": "ice chocolate"
 *           }
 *       ],
 *       "mainCourseNonVeg": [
 *           {
 *               "price": 250,
 *               "name": "burger chicken tikka"
 *           },
 *           {
 *               "price": 200,
 *               "name": "burger chicken cutlet"
 *           },
 *           {
 *               "price": 210,
 *               "name": "burger shredded chicken"
 *           }
 *       ],..    
 * }
 * @example
 * // returns error
 * body {errorCode: 404, message: "Resource Not Found"}
 */

 /**
 * @summary Update menu
 * @description Update menu
 * @name POST /menu/create/:id
 * @function
 * @memberof Retaurant
 * @param {Text} beverages - name of the City.
 * @param {Text} deserts - Address of the restaurant.
 * @param {Text} mainCourseNonVeg - Branch of the restaurant.
 * @param {Text} mainCourseVeg - If restaurant closed.
 * @param {Text} statersNonVeg - name of the City.
 * @param {Text} statersVeg - name of the City.
 * @param {Text} snacks - name of the City.
 * @returns {JSON}
 * @example
 * // returns success
 * status 200 
 * @example
 * // returns error
 * status 400 
 * body {
 *   "errorCode": 404,
 *   "message": "No such menu"
 * }
 * {
 *   errorCode: 500,
 *   message: 'Error when updating menu.',
 *	}
 */

/**
 * @summary Post rating
 * @description Post rating
 * @name POST /reviews/restaurant/:id
 * @function
 * @memberof Restaurant
 * @param {Text} name - Name of the customer.
 * @param {Text} email - Email of the customer.
 * @param {Text} phone	 - Phone number of the customer.
 * @param {Text} address - Address of the customer.
 * @param {Text} DOB - Date of birth of the customer.
 * @param {Text} rating - rating to the restaurant.
 * @returns {JSON}
 * @example
 * // returns success
 * status 200 
 * body 
 * {
 *   "_id": "5947312828fba143ce5a4bbe",
 *   "restaurantId": "5943fd9467af5a599b45c043",
 *   "rating": 5,
 *   "updated": "2017-06-19T02:05:50.545Z",
 *   "created": "2017-06-19T02:05:50.545Z",
 *   "customerId": "5947312828fba143ce5a4bbd",
 *   "__v": 0
 * }
 * @example
 * // returns error
 * status 400 
 * body {errorCode: 400, message:"The request cannot be fulfilled due to bad syntax"}
 */

 /**
 * @summary Get Restaurant Rating
 * @description Get Restaurant Details
 * @name GET /reviews/:id
 * @function
 * @memberof Restaurant
 * @query {params} id - Restaurant id
 * @returns {JSON}
 * @example
 * // returns success
 * status 200
 * body {
 *   "ratings": [
 *       {
 *           "_id": "5947307f8f7a46438743ff5d",
 *           "restaurantId": "5943fd9467af5a599b45c043",
 *           "rating": 5,
 *           "updated": "2017-06-19T02:01:35.931Z",
 *           "created": "2017-06-19T02:01:35.931Z",
 *           "customerId": "5947307f8f7a46438743ff5c",
 *           "__v": 0
 *       },
 *       {
 *           "_id": "5947312828fba143ce5a4bbe",
 *           "restaurantId": "5943fd9467af5a599b45c043",
 *           "rating": 5,
 *           "updated": "2017-06-19T02:05:50.545Z",
 *           "created": "2017-06-19T02:05:50.545Z",
 *           "customerId": "5947312828fba143ce5a4bbd",
 *           "__v": 0
 *       }
 *   ],
 *   "avg": 5
 * }
 */

 /**
 * @summary Login
 * @description Login
 * @name POST /users/login
 * @function
 * @memberof Restaurant
 * @param {Text} email - Email of the customer.
 * @param {Text} password	 - Password.
 
 * @returns {JSON}
 * @example
 * // returns success
 * status 200 
 * body 
 * {
 *   "__v": 0,
 *   "userId": "5947ac2c08f1715df7300991",
 *   "token": "DNRbQaYZtX129IA4yUpJjCWjMDCdpnD3yCyRyBvC0b0",
 *   "created": "2017-06-19T11:54:36.852Z",
 *   "updated": "2017-06-19T11:54:36.852Z",
 *   "expiry": "2017-06-20T11:54:36.852Z",
 *   "_id": "5947bb7cca0d30638c0a8618"
 * }
 * @example
 * // returns error
 * body {errorCode:401 , message: "The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided"}
 */

 /**
 * @summary Create User
 * @description Create User
 * @name POST /users
 * @function
 * @memberof Restaurant
 * 
 * @param {Text} name - Email of the user.
 * @param {Text} email - Email of the user.
 * @param {Text} password - Password. 
 * @param {Text} phone - phone of the user.
 
 * @returns {JSON}
 * @example
 * // returns success
 * status 200 
 * body 
 * {
 *	"name": "Abc",
 *	"email": "abc@gmail.com",
 *	"phone": "963875274",
 *	"password" : "password",
 *  "created": "2017-06-19T10:49:16.400Z",
 *  "updated": "2017-06-19T10:49:16.400Z",
 *  "_id": "5947ac2c08f1715df7300991
 * }
 * @example
 * // returns error
 * body {errorCode:401 , message: "The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided"}
 */