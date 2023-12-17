import PoetryNameEl from "@/components/client-components/poetry-name-element";
import { getSahasranam } from "@/lib/queries";

export default async function Home() {

  const result = await getSahasranam();

  result?.reverse();

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <div className="items-center flex-col justify-center h-full sm:mt-12  min-w-[70vw] flex relative">
        {result?.map((el, index) => (
          <PoetryNameEl 
            name={el.name}
            text={el.text}
            key={el.id}
            index={index +1}
            id={el.id}
          />
        ))}
        </div>
      </main>
  );
}
