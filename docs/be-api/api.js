/**
 * APIs to work with cities
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
 * body { message: 'Error during bulk cities Register.',err: "bulkRegisterErr"}
 */

