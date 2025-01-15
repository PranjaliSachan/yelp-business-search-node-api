exports.codes = {
    200: 'Success',
    400: 'Bad Request',
    401: {
        'UNAUTHORIZED_ACCESS_TOKEN': 'The access token provided is not currently able to query this endpoint',
        'TOKEN_INVALID': 'Invalid access token or authorization header'
    },
    403: 'The API key provided is not currently able to query this endpoint',
    404: 'Resource Not Found',
    413: 'The length of request exceeded the maximum allowed',
    429: `You have either exceeded your daily quota, or have exceeded the queries-per-second limit for this endpoint. 
            Try reducing the rate at which you make queries.`,
    500: 'Internal Serve Error',
    503: 'Service Unavailable'
}

export class ApiError {
    code;
    description;
    constructor(c, d) {
        this.code = c;
        this.description = d;
    }
}