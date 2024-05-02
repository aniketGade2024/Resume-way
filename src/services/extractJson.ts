/* eslint-disable no-empty */
import apiInstance, { apiURLs } from "./client";
import { IExtractJsonPayload } from "@/types/extractJson";


const ExtractResumeJson = async (payload: IExtractJsonPayload) => {
    try {
        const response = await apiInstance.post(apiURLs.extractResumeJson, payload);
        const processedResponse = await response.data;
        return processedResponse;
    } catch { }

}


const ExtractJDJson = async (payload: IExtractJsonPayload) => {
    try {
        const response = await apiInstance.post(apiURLs.extractJdJson, payload);
        const processedResponse = await response.data;
        return processedResponse;
    } catch { }

}



export { ExtractResumeJson, ExtractJDJson }