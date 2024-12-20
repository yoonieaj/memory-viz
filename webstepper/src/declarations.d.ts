// Prevents module not found errors when importing images
declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.svg" {
    const value: string;
    export default value;
}

declare interface Window {
    svgArray: {
        lineNumber: number;
        svg: string;
    }[];
    codeText: string;
}
