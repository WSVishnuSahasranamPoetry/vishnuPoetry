"use client";

import { handleSahasraSubmit, handleSimpleSubmit } from "@/lib/queries";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const AdminPage = () => {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [sahasranamName, setSahasranamName] = useState("");
  const [sahasranamPoetry, setSahasranamPoetry] = useState("");
  const [simplePoetry, setSimplePoetry] = useState("");

  const [isSimple, setIsSimple] = useState(false);



  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <Toaster />
      <h3 className="text-xl font-semibold text-blue-900/70 my-1">
        Admin Panel
      </h3>
        <div className="flex items-center flex-col justify-center">
          <div>
            <button
              className={`bg-white/${
                isSimple ? "30" : "70"
              } font-bold mr-4 transition duration-200 p-2 hover:bg-blue-400/50 mt-3`}
              onClick={() => {
                setIsSimple(false);
              }}
            >
              Sahasranam Poetry
            </button>
            <button
              className={`bg-white/${
                isSimple ? "70" : "30"
              } font-bold transition duration-200 p-2 hover:bg-blue-400/50 mt-3`}
              onClick={() => {
                setIsSimple(true);
              }}
            >
              Simple Poetry
            </button>
          </div>

          {!isSimple ? (
            <form className="flex w-full flex-col">
              <input
                className="mt-6 p-2 bg-white"
                value={sahasranamName}
                type="text"
                placeholder="Имя-качество"
                onChange={(e) => setSahasranamName(e.target.value)}
              />
              <textarea
                className="mt-3 p-2 bg-white/70"
                value={sahasranamPoetry}
                placeholder="..."
                onChange={(e) => setSahasranamPoetry(e.target.value)}
                rows={10}
              />
              <button 
                className="bg-blue-600/70 transition duration-200 p-2 hover:bg-blue-400 mt-3"
                onClick={()=>{handleSahasraSubmit({sahasraName: sahasranamName, sahasraText :sahasranamPoetry})}}
              >
                Подтвердить
              </button>
            </form>
          ) : (
            <form className="flex w-full flex-col">
              <textarea
                className="p-2 bg-white/70 mt-12"
                value={simplePoetry}
                placeholder="..."
                onChange={(e) => setSimplePoetry(e.target.value)}
                rows={10}
                
              />
              <button 
                className="bg-blue-600/70 transition duration-200 p-2 hover:bg-blue-400 mt-3"
                onClick={()=>{handleSimpleSubmit({simpleText: simplePoetry})}}
              >
                Подтвердить
              </button>
            </form>
          )}
        </div>
      
    </main>
  );
};

export default AdminPage;
