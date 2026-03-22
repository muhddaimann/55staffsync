import React, { createContext, useContext, useState, useEffect } from "react";
import { useToken } from "./tokenContext";
import { useOverlay } from "./overlayContext";
import { router } from "expo-router";

type AuthContextType = {
  user: string | null;
  isLoading: boolean;
  signIn: (username: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getToken, saveToken, deleteToken } = useToken();
  const { toast, confirm } = useOverlay();

  useEffect(() => {
    const loadSession = async () => {
      try {
        const savedUser = await getToken();
        if (savedUser) {
          setUser(savedUser);
        }
      } catch (e) {
        console.error("Failed to load session", e);
      } finally {
        setIsLoading(false);
      }
    };
    loadSession();
  }, []);

  const signIn = async (username: string, password: string) => {
    if (username === "user" && password === "123") {
      try {
        await saveToken(username);
        setUser(username);
        toast({ message: "Signed in successfully", variant: "success" });
        return true;
      } catch (e) {
        console.error("Failed to save session", e);
        toast({ message: "Failed to save session", variant: "error" });
        return false;
      }
    }

    toast({ message: "Invalid username or password", variant: "error" });
    return false;
  };

  const signOut = async () => {
    confirm({
      title: "Sign Out",
      message: "Are you sure you want to sign out?",
      confirmText: "Sign Out",
      cancelText: "Cancel",
      isDestructive: true,
      onConfirm: async () => {
        try {
          await deleteToken();
          setUser(null);
          toast({ message: "Signed out", variant: "success" });
          router.replace("/goodbye");
        } catch (e) {
          console.error("Failed to delete session", e);
          toast({ message: "Failed to sign out", variant: "error" });
        }
      },
    });
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
