import { languages } from "@/constants/languages";
import { Language } from "./type";

export const handleDownload = (source_code:string, fileName:string) => {
    // Create a Blob from the user input
    const blob = new Blob([source_code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName; // Filename for the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up
};

export const filterLanguage = (slug: string): Language | undefined => {
    const language = languages.find(language => language.lang === slug);
    return language ? language: undefined; // Return undefined if not found
};
