/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        API_URL: string;
        REACT_APP_API_KEY: string;
        // Add any other environment variables here
    }
}
