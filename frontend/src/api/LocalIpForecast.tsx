import { useState, useEffect } from "react";

interface PropsData {
  fecha: string;
  
}

export function useFetch(url: string): { data: PropsData | null } {
  const [data, setData] = useState<PropsData | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => { // Cambia el nombre de la variable a responseData
        const PropsData: PropsData = {
            fecha: data.dt_txt,
            
        };
        setData(PropsData);
      });
  }, [url]);

  return { data };
}
