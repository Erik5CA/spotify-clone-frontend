import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import useAuthStore from "@/stores/useAuthStore";
import { useChatStore } from "@/stores/useChatStore";

const updateApiToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken, userId } = useAuth();
  const [loading, setLoading] = useState(true);
  const { checkAdminStatus } = useAuthStore();
  const { initSocket, disconnectSocket } = useChatStore();
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);
        if (token) {
          await checkAdminStatus();
          if (userId) {
            initSocket(userId);
          }
        }
      } catch (error) {
        updateApiToken(null);
        console.log("Error in AuthProvider: ", error);
      } finally {
        setLoading(false);
      }
    };
    initAuth();

    return () => disconnectSocket();
  }, [getToken, checkAdminStatus, initSocket, userId, disconnectSocket]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loader className="animate-spin size-8 text-emerald-500" />
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthProvider;
