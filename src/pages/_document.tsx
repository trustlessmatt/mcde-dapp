import { PageHead } from "@/components";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <PageHead
        title="Mickey DeGods"
        description="The original DeGods sub-community."
        url="https://mickeydegods.com/"
        twitter="MickeyDeGods"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
