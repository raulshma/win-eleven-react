import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { AppState } from "@/App";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { getRandomValue } from "@/utilities/random";
import { ImSpinner8 } from "react-icons/im";
import {
  useClerk,
  useSession,
} from "@clerk/clerk-react";

export default function LockscreenLogin({
  onLogin,
  variant,
}: {
  variant: "password" | "oauth";
  onLogin: React.Dispatch<React.SetStateAction<AppState>>;
}) {
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const clerk = useClerk();
  const userSession = useSession();

  const handleUnlock = (e: FormEvent) => {
    if (!password) {
      handleInvalid();
    }
    e.preventDefault();
    setLoading(true);
    const random = getRandomValue(1, 2);
    setTimeout(() => {
      if (password == "123") {
        onLogin("desktop");
      } else {
        setLoading(false);
        handleInvalid();
        setPassword("");
      }
    }, random);
  };

  function handleInvalid() {
    setIsInvalid(true);
    setTimeout(() => {
      setIsInvalid(false);
    }, 500);
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-4 pointer-events-auto">
      <Avatar className="w-40 h-40 shadow-md ring-1 ring-white/40">
        <AvatarImage
          className="w-40 h-40"
          src={
            userSession.isSignedIn
              ? userSession.session.publicUserData.imageUrl
              : "https://i.pravatar.cc/300"
          }
          loading="lazy"
        />
        <AvatarFallback>User</AvatarFallback>
      </Avatar>
      <p className="text-white text-lg mt-4">{userSession.isSignedIn ? `${userSession.session.publicUserData.firstName} ${userSession.session.publicUserData.lastName}` : "User"}</p>
      <div
        className={cn(
          "flex w-full max-w-sm items-center justify-center space-x-0",
          isInvalid ? "animate-shake border-red-500" : ""
        )}
      >
        {variant === "password" ? (
          <form className="flex" onSubmit={handleUnlock}>
            <Input
              autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-36 px-4 pl-12 py-2 text-center backdrop-blur-md bg-black/20 backdrop-filter-none text-lg border-0 placeholder-gray-300 focus:outline-none focus:border-transparent focus-visible:outline-none focus-visible:ring-transparent rounded-tr-none rounded-br-none"
              placeholder="Password"
            />
            <Button
              type="submit"
              variant={"outline"}
              size={"icon"}
              className="transition-colors backdrop-blur-md bg-black/20 shadow-sm backdrop-filter-none border-none outline-none m-0 rounded-tl-none rounded-bl-none hover:bg-black/20 hover:text-white"
            >
              {loading ? (
                <ImSpinner8 className="animate-spin text-gray-200 w-4 h-4" />
              ) : (
                <ChevronRightIcon />
              )}
            </Button>
          </form>
        ) : (
          <Button
            variant={"outline"}
            className="backdrop-blur-md bg-black/20 shadow-sm backdrop-filter-none border-none outline-none m-0 hover:bg-black/20 text-white"
            onClick={() =>
              userSession.isSignedIn ? onLogin("desktop") : clerk.openSignIn({})
            }
          >
            Sign in
          </Button>
        )}
      </div>
    </div>
  );
}
