import { Language } from "@/utils/type";

export const languages: Language[] = [
    { fileName: "main.c", id: 75, name: "C", lang: "c", codeExample: `#include <stdio.h>\nint main() {\n    printf("Hello, World!");\n    return 0;\n}`, slug: "c-programming" },
    { fileName: "main.cpp", id: 76, name: "C++", lang: "cpp", codeExample: `#include <iostream>\nint main() {\n    std::cout << "Hello, World!";\n    return 0;\n}`, slug: "cpp-programming" },
    { fileName: "Main.java", id: 62, name: "Java", lang: "java", codeExample: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`, slug: "java-programming" },
    { fileName: "script.js", id: 63, name: "JavaScript", lang: "javascript", codeExample: `console.log("Hello, World!");`, slug: "javascript-programming" },
    { fileName: "script.py", id: 71, name: "Python 3", lang: "python", codeExample: `print("Hello, World!")`, slug: "python3-programming" },
    { fileName: "script.ts", id: 74, name: "TypeScript", lang: "typescript", codeExample: `console.log("Hello, World!");`, slug: "typescript-programming" },
];
