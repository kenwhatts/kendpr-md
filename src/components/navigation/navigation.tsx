import { useEffect, useState } from "react";
import { DialogMenu } from "./dialogMenu";
import { Logo } from "../logo";

export function Navigation({ pageType }: { pageType: string }) {
  const [dialogStatus, setDialogStatus] = useState<"close" | "open">("close");

  useEffect(() => {
    if (dialogStatus === "open") {
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "auto";
  }, [dialogStatus]);

  return (
    <>
      <nav className="fixed top-12 left-1/2 z-40 flex w-full max-w-[calc(100%-13%)] -translate-x-1/2 justify-between rounded-xl bg-neutral-800 px-6 py-3 backdrop-blur-md sm:max-w-[calc(var(--breakpoint-sm)*(1-0.13))]">
        <a href="/">
          <Logo location="navigation" />
        </a>
        {dialogStatus === "close" && (
          <button
            aria-label="Sandwhich Menu"
            title="Sandwhich Menu"
            onClick={() => setDialogStatus("open")}
            className="squish text-2xl duration-150 ease-in-out">
            &#129386;
          </button>
        )}
      </nav>
      <DialogMenu
        pageType={pageType}
        dialogStatus={dialogStatus}
        setDialogStatus={setDialogStatus}
      />
    </>
  );
}
