import React, { useEffect, useState } from "react";
import Papa from "papaparse";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const formURL = "https://forms.gle/fTbbicrLJmscgsCb8"; 

  useEffect(() => {
    const sheetURL =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQOgYjeYQQyKovMkdw5YlRJ-frjNyXhNWbyMvPkv5w9UGA1bDLz7tqbZIvfrWJ-JmjYc5C0iu1PUO65/pub?output=csv";

    fetch(sheetURL)
      .then((response) => response.text())
      .then((csv) => {
        const result = Papa.parse(csv, { header: true });

        const cleanedData = result.data.map((row) => {
          let imageURL = row["Capture_the_Cake_Magic"];
          let finalImage = "";

          if (imageURL) {
            let fileId = "";

            if (imageURL.includes("id=")) {
              fileId = imageURL.split("id=")[1];
            } else if (imageURL.includes("/d/")) {
              fileId = imageURL.split("/d/")[1].split("/")[0];
            }

            if (fileId) {
              finalImage = `https://drive.google.com/uc?export=view&id=${fileId}`;
            }
          }

          return {
            name: row["Customer"],
            rating: row["Customer's_Smiles"],
            feedback: row["Feel_to_Express"],
            image: finalImage,
          };
        });

        const filtered = cleanedData.filter(
          (r) => r.name || r.feedback || r.rating
        );

        setReviews(filtered);
      });
  }, []);

  const renderStars = (rating) => {
    const num = parseInt(rating) || 0;
    return "⭐".repeat(num);
  };

  const handleOpenForm = () => {
    // Open Google Form in a new tab
    window.open(formURL, "_blank");
  };

  return (
    <div style={{ padding: "60px", background: "#fff5f5" }}>
      {/* Header + Add Review button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            color: "#d6336c",
          }}
        >
          💬 Customer Reviews
        </h2>

        <button
          onClick={handleOpenForm}
          style={{
            background: "#d6336c",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ✏️ Add Review
        </button>
      </div>

      {/* Reviews Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            {review.name && <h3>👤 {review.name}</h3>}

            <div style={{ fontSize: "18px", margin: "10px 0" }}>
              {renderStars(review.rating)}
            </div>

            {review.feedback && <p>{review.feedback}</p>}

            {review.image && (
              <a href={review.image} target="_blank" rel="noopener noreferrer">
                <button
                  style={{
                    marginTop: "10px",
                    padding: "10px 15px",
                    background: "linear-gradient(45deg,#ff6b6b,#d6336c)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  🎂 View Cake Image
                </button>
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Optional modal overlay when "Add Review" clicked */}
      {openForm && (
        <div
          onClick={() => setOpenForm(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            fontSize: "18px",
            color: "white",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#d6336c",
              padding: "30px 50px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            }}
          >
            <p>Google Form will open in a new tab ✨</p>
            <button
              onClick={() => {
                handleOpenForm();
                setOpenForm(false);
              }}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "white",
                color: "#d6336c",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Open Form
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reviews;