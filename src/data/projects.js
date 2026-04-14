export const projects = {
  aiml: [
    {
      id: "sat-x",
      title: "SAT-X",
      tagline: "Satellite Imagery Super-Resolution",
      description:
        "Engineered a high-fidelity image processing pipeline for disaster management. Implemented Vision Transformers (HAT) and integrated Multimodal LLMs to perform super-resolution on degraded satellite imagery. Designed to extract actionable intelligence from low-visibility geographic data in mission-critical environments.",
      tech: ["Python", "PyTorch", "Vision Transformers (HAT)", "Multimodal LLMs"],
      github: "https://github.com/13thAline/SAT-X",
      status: "DEPLOYED",
      statusColor: "matrix",
    },
    {
      id: "digital-surveyor",
      title: "DIGITAL_SURVEYOR",
      tagline: "Automated Spatial Analysis",
      description:
        "Developed an automated computer vision pipeline for real-time car damage detection and analysis. Trained and deployed custom YOLOv8 object detection models coupled with ZoeDepth for spatial depth estimation. The inference engine processes raw visual data into structured, quantified damage reports via a FastAPI microservice.",
      tech: ["Python", "YOLOv8", "ZoeDepth", "FastAPI"],
      github: "https://github.com/13thAline/Digital-Surveyor-demo",
      status: "ACTIVE",
      statusColor: "glow",
    },
    {
      id: "zomathon",
      title: "ZOMATHON",
      tagline: "Behavioral Recommendation Engine",
      description:
        "Built a Two-Tower recommendation system to predict user preferences based on simulated behavioral data. Developed the training pipeline to generate user and item vector embeddings, matching consumer interactions with complex catalog data to deliver high-accuracy, personalized content delivery.",
      tech: ["Python", "TensorFlow", "Vector Embeddings", "React"],
      github: "https://github.com/13thAline/Zomathon",
      status: "ACTIVE",
      statusColor: "glow",
    },
  ],

  fullstack: [
    {
      id: "cosmic-watch",
      title: "Cosmic Watch",
      tagline: "Real-Time Ephemeris Tracker",
      description:
        "Architected a full-stack astronomical tracking dashboard. Integrated complex NASA APIs to ingest real-time Near Earth Object (NEO) data. Built a custom physics engine using Monte Carlo simulations and Keplerian elements to predict orbital paths, visualized on the frontend using highly optimized 3D WebGL/Three.js environments.",
      tech: ["React", "Three.js", "Node.js/Express", "Redis", "Celery"],
      github: "https://github.com/13thAline/Cosmic-Watch",
    },
    {
      id: "safar-punjab",
      title: "Safar Punjab",
      tagline: "Culturally-Driven Transit Platform",
      description:
        "Developed an end-to-end mobile transit application featuring a modular, culturally-inspired UI architecture. Bridged a seamless React Native frontend with a robust FastAPI backend. Engineered an asynchronous driver verification pipeline utilizing Redis and Celery, integrating PyTesseract OCR and facial recognition for automated onboarding.",
      tech: ["React Native (Expo)", "TypeScript", "FastAPI", "Celery", "MongoDB"],
      github: "https://github.com/13thAline/Safar-Punjab",
    },
    {
      id: "baazario",
      title: "Baazario",
      tagline: "B2B Marketplace Architecture",
      description:
        "Designed and shipped a comprehensive B2B marketplace platform. Built complex Role-Based Access Control (RBAC) to support distinct Vendor and Supplier dashboard experiences. Focused heavily on normalized database schemas in MongoDB and secure, JWT-based authentication pipelines to handle sensitive group orders and catalog management.",
      tech: ["MongoDB", "Express", "React", "Node.js (MERN)"],
      github: "https://github.com/13thAline/Baazario",
    },
  ],
};
