import type {Metadata} from "next";
import {Fira_Sans} from "next/font/google";
import {PropsWithChildren} from "react";
import "./globals.css"

const firaSans = Fira_Sans({weight: '400', subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Todo-graphql",
  description: "A Todo add using Next, GraphQL, and Laravel",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className={'bg-slate-900 text-slate-50'}>
    <body className={`flex flex-col gap-4 p-4 min-h-dvh h-dvh ${firaSans.className}`}>
    <header>
      <h1 className={'text-4xl'}>Next, GraphQL, Laravel</h1>
    </header>

    <main className={'flex-grow'}>
      <div className={'max-w-4xl w-4xl mx-auto '}>
        {children}
      </div>
    </main>

    <footer>
      <p className={'text-center'}>&copy; 2024 Source Pot</p>
    </footer>
    </body>
    </html>
  );
}
