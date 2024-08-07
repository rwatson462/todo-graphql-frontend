import type {Metadata} from "next";
import {Fira_Sans} from "next/font/google";
import {PropsWithChildren} from "react";
import "./globals.css"
import {ClientProviders} from "@/components/ClientProviders";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const firaSans = Fira_Sans({weight: '400', subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Todo-graphql",
  description: "A Todo add using Next, GraphQL, and Laravel",
};

export default function RootLayout({children}: Readonly<PropsWithChildren>) {
  return (
    <ClientProviders>
      <html lang="en" className={'bg-slate-900 text-slate-50'}>
      <body className={`max-w-4xl mx-auto flex flex-col gap-4 p-4 min-h-dvh h-dvh ${firaSans.className}`}>

      <Header/>

      <main className={'flex-grow'}>
          {children}
      </main>

      <Footer/>

      </body>
      </html>
    </ClientProviders>
  );
}
