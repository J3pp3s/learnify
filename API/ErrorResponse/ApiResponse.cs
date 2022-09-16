namespace API.ErrorResponse
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string errorMessage = null)
        {
            StatusCode = statusCode;
            ErrorMessage = errorMessage ?? DefaultErrorMessage(statusCode);
        }

        public int StatusCode { get; set; }

        public string ErrorMessage { get; set; }

        private string DefaultErrorMessage(int statusCode)
        {
            return statusCode switch
            {
                400 => "Bad Request",
                401 => "Unauthorized",
                404 => "Resource Not Found",
                500 => "Internal Server Error",
                _ => "An unexpected error has occurred."
            };
        }
    }
}