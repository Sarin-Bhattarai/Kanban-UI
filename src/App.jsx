import { Toaster } from "react-hot-toast";
import Login from "./features/auth/login/Login";
import Register from "./features/auth/register/Register";
import { AuthProvider } from "./features/auth/context/AuthContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="login" />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

      {/* Toaster here is initialized to use all over the app for notifications */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: " #fff",
            color: "#374151",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
