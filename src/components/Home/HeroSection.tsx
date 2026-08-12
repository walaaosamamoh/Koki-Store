import { useEffect, useState } from "react";
import { useGetCategories } from "../../hooks/useGetCategories";

export default function HeroSection() {
  const { data: categories, isLoading, isError } = useGetCategories();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (!categories?.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < categories.length - 1) {
          return prev + 1;
        }

        return prev;
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [categories]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load categories</div>;
  }

  return (
    <div>
      <div className="relative overflow-hidden w-full h-96 md:h-125">
        {categories?.map((category, index) => (
          <div>
            {currentIndex === index && (
              <div
                key={category.id}
                className="absolute inset-0 w-full h-full transition duration-1000 ease-in-out"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 text-white p-4 flex flex-col justify-center items-center text-center">
                  <h1 className="text-4xl font-bold">{category.title}</h1>

                  <p className="text-xl text-gray-200">
                    {category.description}
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-white" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}  
                ></button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
