import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./style/globals.css";
import Header from "./component/rootLayout/header";
import Sidebar from "./component/rootLayout/sidebar";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Live chat",
  description: "자유롭게 라이브 채팅을 이용해 보세요",
};

export default function RootLayout(props: any) {
  return (
    <html lang="ko">
      <body
        className={`${roboto.className}flex flex-col bg-gray-100 overflow-hidden h-screen`}
      >
        <Header />
        <section className="flex">
          <Sidebar />
          {props.children}
        </section>
      </body>
    </html>
  );
}
