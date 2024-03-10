"use client";
import React, { useEffect } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import EventListeners from "../EventListener/EventListener";
import ToastifyProvider from "../toastify/ToastifyProvider";
import { parseCookies } from "nookies";

const ClientSide = ({ children, pageProps }: any) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        retry: 0,
        // networkMode: 'offlineFirst'
      },
    },
  });

  useEffect(() => {
    const token = parseCookies().atHomee_token
    
  }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate
        //  state={pageProps.dehydratedState}
        >
          <ToastifyProvider>
            <EventListeners />
          </ToastifyProvider>
          {children}
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default ClientSide;
