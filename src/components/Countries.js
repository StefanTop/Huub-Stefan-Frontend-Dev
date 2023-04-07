import {useState, useEffect} from "react";
import Article from "./Article";

export default function Countries() {     
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async() => {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all");
                const data = await res.json();
                setCountries(data.slice(0,10));
            } catch (error) {
                console.error(error);
            }
        };

        getCountries();
<<<<<<< HEAD
    }, [])
=======
    }, []);
>>>>>>> 8f6f478d92ff2e0c96d6a4d1bd0ea4f1b3b9c6ec

    return (
       <>
         {!countries ? (
           <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
              Loading...
           </h1> 
         ) : (
        <section>
            {/* form */}
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
            </div>
        </section>
      )} 
    </>
  );
}
