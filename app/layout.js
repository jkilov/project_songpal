import '@styles/globals.css';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        {children}
        </body>
    </html>
  );
}


export default RootLayout