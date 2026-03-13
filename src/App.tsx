import ConfirmationSidebar from "./components/sidebar/ConfirmationSidebar";
import { dealData } from "./data/deal";
import logo from "/logo.svg";

export default function App() {
  const user = dealData.participants.find((p) => {
    return p.isCurrentUser
  });

  return (
    <>
      <nav className="bg-[#103128] flex items-center justify-between py-2 px-8">
        {/* logo */}
        <img src={logo} alt="Mycut 2026" className="w-60" />
        <div className="flex items-center gap-3">
          <p className="instrument font-medium text-sm text-white">
            { user?.name || "No User" }
          </p>
        </div>
      </nav>
      <section className="grid grid-cols-4 gap-5 p-6">
        <div className="col-span-3"></div>
        <div className="col-span-1">
          <ConfirmationSidebar />
        </div>
      </section>
    </>
  );
}
