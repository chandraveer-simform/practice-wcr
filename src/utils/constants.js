const NUMERIC_VALUES = {
    PASSWORD_LENGHT: 5,
    PASS_SALT_ROUNDS: 11,
    OTP_LENGHT: 4,
    OTP_SALT_ROUNDS: 11,
};

const USER_ROLE = {
    OWNER: 1,
    SUPER_ADMIN: 2,
    ADMIN: 3
};

const STATUS_CODE = {
    SUCCESS: 200, // ok - This response status code indicates that our request was successful.
    CREATED_SUCCESS: 201, // The 201 Created response code is returned with the newly created resource as the request body. 
    VALIDATION_ERROR: 400, // Bad requests occur when the client sends a request with either incomplete data
    UNAUTHORIZED: 401, // Authentication here could be providing access-token in the case of OAuth or Authorization token in the case of jwt based auth system or even API keys.
    FORBIDDEN: 403, // An authenticated client can be Forbidden from accessing a resource just as an unauthenticated client can.
    NOT_FOUND: 404, // Some resources can be accessed via any request method (GET, POST or HEAD) and in such a case, you will not get the 405 Method Not Allowed response code.
    CONFLICT_ERROR: 409, // A good example of such conflict is trying to update a resource on the server with an older version.
    SERVER_ERROR: 500, // When the server processes the request of the client and runs into a situation it cannot handle, it sends 500 Internal Server Error.
    BAD_GATEWAY: 502, //The server sends this code when it is acting as a proxy server and/or fetching data from an external resource and it gets an invalid response from that external source.
    SERVICE_UNAVAILABLE: 503 // This is a common server error code that you can get. It means the server might be down and therefore, 
};

const STATUS_TYPE_MESSAGE = {
    SUCCESS: "success",
    ERROR: "error"
};

const KEYS_NAME = {
    AUTH_TOKEN: "auth-token",
    AUTHORIZATION: "authorization"
};

const PATTERNS = {
    UNDERSCORE: "/_/g"
};

module.exports = { NUMERIC_VALUES, USER_ROLE, STATUS_CODE, KEYS_NAME, STATUS_TYPE_MESSAGE, PATTERNS };
