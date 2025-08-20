import React from 'react';
import './CareerCards.css';

const CareerCards = () => {
  const careers = [
    {
      id: 1,
      title: "Renewable Energy Engineer",
      description: "Design and optimize solar, wind, and energy storage systems",
      imageUrl: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=300&fit=crop&crop=center",
      gradient: "linear-gradient(135deg, rgba(0, 188, 212, 0.8), rgba(76, 175, 80, 0.8))"
    },
    {
      id: 2,
      title: "Clinical Epidemiologist",
      description: "Investigate disease patterns to inform public health decisions",
      imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center",
      gradient: "linear-gradient(135deg, rgba(0, 121, 107, 0.8), rgba(38, 166, 154, 0.8))"
    },
    {
      id: 3,
      title: "Urban Planner",
      description: "Shape land use, transit, and housing for livable, resilient cities",
      imageUrl: "https://www.cmr.edu.in/blog/wp-content/uploads/2023/01/How-to-Become-an-Urban-Planner.jpg",
      gradient: "linear-gradient(135deg, rgba(121, 85, 72, 0.8), rgba(96, 125, 139, 0.8))"
    },
    {
      id: 4,
      title: "Environmental Lawyer",
      description: "Advocate for conservation, compliance, and climate policy cases",
      imageUrl: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=400&h=300&fit=crop&crop=center",
      gradient: "linear-gradient(135deg, rgba(63, 81, 181, 0.8), rgba(0, 150, 136, 0.8))"
    },
    {
      id: 5,
      title: "Financial Planner",
      description: "Build budgets, investments, and retirement strategies for clients",
      imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=400&h=300&fit=crop&crop=center",
      gradient: "linear-gradient(135deg, rgba(33, 150, 243, 0.8), rgba(3, 169, 244, 0.8))"
    },
    {
      id: 6,
      title: "Instructional Designer",
      description: "Create curricula and e-learning that improve learning outcomes",
      imageUrl: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&h=300&fit=crop&crop=center",
      gradient: "linear-gradient(135deg, rgba(255, 193, 7, 0.8), rgba(255, 152, 0, 0.8))"
    },
    {
      id: 7,
      title: "Sports Physiotherapist",
      description: "Prevent and rehabilitate injuries to keep athletes performing",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZw53-R7JX9Zy81FBJpBPcuMkz7BPhqC9QXA&s",
      gradient: "linear-gradient(135deg, rgba(233, 30, 99, 0.8), rgba(156, 39, 176, 0.8))"
    },
    {
      id: 8,
      title: "Museum Curator",
      description: "Research, acquire, and present collections for public education",
      imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop&crop=center",
      gradient: "linear-gradient(135deg, rgba(96, 125, 139, 0.8), rgba(84, 110, 122, 0.8))"
    },
    {
      id: 9,
      title: "Logistics Coordinator",
      description: "Schedule shipments and streamline warehouse-to-delivery workflows",
      imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=300&fit=crop&crop=center",
      gradient: "linear-gradient(135deg, rgba(0, 150, 136, 0.8), rgba(0, 188, 212, 0.8))"
    },
    {
      id: 10,
      title: "Agricultural Extension Officer",
      description: "Train farmers on sustainable practices and crop health",
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=300&fit=crop&crop=center",
      gradient: "linear-gradient(135deg, rgba(67, 160, 71, 0.8), rgba(129, 199, 132, 0.8))"
    }
  ];

  return (
    <section className="career-cards-section">
      <div className="container">
        <div className="section-header">
          <h2>Choose What Fits You</h2>
          <p>Explore roles you’ll love and map the steps to get there.</p>
        </div>
        
        <div className="career-cards-container">
          <div className="career-cards-scroll">
            {careers.map((career) => (
              <div key={career.id} className="career-card">
                <div 
                  className="career-card-background"
                  style={{
                    backgroundImage: `${career.gradient}, url(${career.imageUrl})`,
                  }}
                >
                  <div className="career-card-content">
                    <h3 className="career-title">{career.title}</h3>
                    <p className="career-description">{career.description}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="scroll-indicators">
            <span className="scroll-hint">← Scroll to explore more careers →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCards;
