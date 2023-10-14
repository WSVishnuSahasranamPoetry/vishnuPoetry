import PoetrySimpleEl from "@/components/client-components/poetry-simple-elemement";
import { getSimpleQuotes } from "@/lib/queries";
import React from "react";

const QuotesPage = async () => {
  const result = await getSimpleQuotes();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="items-center flex-col justify-center h-full sm:mt-12  min-w-[70vw] flex relative">
        {result?.map((el) => (
          <PoetrySimpleEl text={el.text} key={el.id} id={el.id} />
        ))}
      </div>
    </main>
  );
};

export default QuotesPage;
