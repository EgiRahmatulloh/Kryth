import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen gap-8 text-center antialiased">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Tauri + React</h1>
        <p className="text-muted-foreground">Click on the Tauri, Vite, and React logos to learn more.</p>
      </div>

      <div className="flex justify-center gap-4">
        <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src="/vite.svg" className="h-24 w-24 p-4 drop-shadow-md transition-all hover:drop-shadow-[0_0_2em_#747bff]" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank" className="transition-transform hover:scale-110">
          <img src="/tauri.svg" className="h-24 w-24 p-4 drop-shadow-md transition-all hover:drop-shadow-[0_0_2em_#24c8db]" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src={reactLogo} className="h-24 w-24 p-4 drop-shadow-md transition-all hover:drop-shadow-[0_0_2em_#61dafb]" alt="React logo" />
        </a>
      </div>

      <form
        className="flex w-full max-w-sm items-center space-x-2"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <Input
          type="text"
          placeholder="Enter a name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Greet</Button>
      </form>
      
      {greetMsg && (
        <p className="text-lg font-medium animate-in fade-in slide-in-from-bottom-2 duration-500">
          {greetMsg}
        </p>
      )}
    </main>
  );
}

export default App;
