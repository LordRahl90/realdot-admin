// export const BACKEND_URL=;

export const backendURL = ()=> {
    console.log(process.env);
    switch (process.env.NODE_ENV) {
        case "development":
            return "http://127.0.0.1:8080";
            case "staging":
                return "https://api.staging.realdot.ng";
            case "testing":
                return "https://api.testing.realdot.ng";
            case "production":
                return "https://api.realdot.ng";
    }
    
}