declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.(png|ico|svg|jpg|jpeg|gif|bmp|tiff)' {
    const value: string;
    export default value;
  }
  