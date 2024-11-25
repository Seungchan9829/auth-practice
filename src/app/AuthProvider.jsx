import React, { createContext, useState, useEffect, useContext } from "react";
import authService from "../features/auth/services/authService";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await authService.checkAuth(); // AuthService의 checkAuth 호출
        console.log("AuthPrivider", response)
        const role = response?.data?.user?.role || null; // 안전한 접근

        console.log("AuthProvider :", role)
        if (response.status === 200) {
          console.log("인증성공 setIsAuthenticated, userRole")
          setIsAuthenticated(true); // 인증 성공 시 상태 업데이트
          setUserRole(role)
        }
      } catch (error) {
        setIsAuthenticated(false); // 인증 실패 시 상태 초기화
        setUserRole(null)
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    if (window.location.pathname !== "/login") {
      checkAuthStatus();
  } else {
      setLoading(false);
  }
  }, []);

  const logout = async () => {
    try {
      await authService.logout(); // AuthService의 logout 호출
      setIsAuthenticated(false);
      setUserRole(null)
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout, userRole, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
