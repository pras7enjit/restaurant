module.exports = {
	noMenu: {errorCode: 204, message: "The request has been successfully processed, but is not returning any content"},
	menuExits: {errorCode: 409, message: "The request could not be completed because of a conflict in the request... Menu Exits, Please update menu."},
	notFound: {errorCode: 404, message: "Resource Not Found"},
	noCustomer: {errorCode: 404, message: "Customer exist"},
	badRequest: {errorCode: 400, message:"The request cannot be fulfilled due to bad syntax"},
	customerDuplicate: {errorCode:403, 	message: "The request was a legal request, but the server is refusing to respond to it"}

}