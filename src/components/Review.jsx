import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  const sheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQOgYjeYQQyKovMkdw5YlRJ-frjNyXhNWbyMvPkv5w9UGA1bDLz7tqbZIvfrWJ-JmjYc5C0iu1PUO65/pub?gid=934043962&single=true&output=csv";

  useEffect(() => {
    Papa.parse(sheetURL, {
      download: true,
      header: true,
      complete: (results) => {
        const cleanData = results.data.filter((r) => r.Name);
        setReviews(cleanData);
      },
    });
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50">
      
      <h2 className="text-3xl font-bold text-center mb-12">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >
            {/* Rating */}
            <div className="text-yellow-400 text-lg mb-3">
              {"⭐".repeat(item.Rating)}
            </div>

            {/* Review */}
            <p className="text-gray-600 italic mb-4">
              "{item.Review}"
            </p>

            {/* Name */}
            <h3 className="font-semibold text-gray-800">
              - {item.Name}
            </h3>
          </div>
        ))}
      </div>

    </section>
  );
}