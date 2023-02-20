import { UserInfo, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../../firebase/firebase";

const useHeader = () => {
  const [currentUser, setCurrentUser] = useState<null | UserInfo>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenPopover = () => {
    setIsOpen((prev) => !prev);
  };

  const onLogout = () => {
    auth.signOut();
    setIsOpen(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return { currentUser, isOpen, onOpenPopover, onLogout };
};

export default useHeader;
