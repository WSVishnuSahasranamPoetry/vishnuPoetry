"use client";

import { editQuotes } from "@/lib/queries";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const EditPage = ({ params }: { params: { sahaid: string } }) => {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [sahasranamName, setSahasranamName] = useState("");
  const [sahasranamPoetry, setSahasranamPoetry] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  supabase.auth.getSession().then((res) => {
    if (res.data.session) {
      setIsAdmin(true);
    }
  });

  return (
    <main className="flex flex-col justify-center items-center">
      <Toaster />
      <h3 className="text-xl font-semibold text-blue-900/70 my-1">
        Edit Panel
      </h3>
      {!isAdmin ? (
        <form
          className="flex-col flex "
          onSubmit={async (e) => {
            e.preventDefault();

            if (email !== "kravdovidova33@mail.ru") {
              return toast.error("Неверные данные администратора");
            } else {
              const { data: sUpData, error: sUpErr } =
                await supabase.auth.signInWithOtp({
                  email: email.trim(),
                  options: {
                    data: {
                      username,
                    },
                  },
                });

              if (sUpErr) {
                return toast.error(sUpErr.message);
              }
            }
            toast.success("Ссылка для адмистрирования отправлена на почту");
          }}
        >
          <input
            className="mt-6 p-2"
            value={email}
            type="email"
            placeholder="e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mt-3 p-2"
            value={username}
            type="text"
            placeholder="Имя"
            onChange={(e) => setUsername(e.target.value)}
          />

          <button className="bg-blue-600/70 transition duration-200 p-2 hover:bg-blue-400 mt-3">
            Подтвердить
          </button>
        </form>
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
          <div className="flex items-center flex-col justify-center">
            <form className="flex w-full flex-col">
              <textarea
                className="mt-3 p-2 bg-white/70"
                value={sahasranamPoetry}
                placeholder="..."
                onChange={(e) => setSahasranamPoetry(e.target.value)}
                rows={10}
              />
              <button
                className="bg-blue-600/70 transition duration-200 p-2 hover:bg-blue-400 mt-3"
                onClick={() => {
                  editQuotes({
                    sahasraId: params.sahaid,
                    sahasraText: sahasranamPoetry,
                  });
                }}
              >
                Подтвердить
              </button>
            </form>
          </div>
        </main>
      )}
    </main>
  );
};

export default EditPage;
