
export default function Home() {
  return (
    <main className="flex justify-start w-screen hover:justify-between ">
      <div className="w-2/12 h-full bg-slate-900 ">Menu</div>
      <div className="grid grid-cols-3 gap-4 h-screen w-full p-4">
         <div className="w-auto bg-slate-500 rounded-lg">01</div>
         <div className="w-auto bg-slate-500 rounded-lg">02</div>
         <div className="w-auto bg-slate-500 rounded-lg">03</div>
      </div>
    </main>
  );
}
